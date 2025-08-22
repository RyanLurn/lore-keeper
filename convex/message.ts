import { api } from "backend/_generated/api";
import type { Doc } from "backend/_generated/dataModel";
import { mutation, query } from "backend/_generated/server";
import { messageFields, textPartValidator } from "backend/schemas/message";
import { systemFields } from "backend/schemas/systemFields";
import type { WithoutSystemFields } from "convex/server";
import { ConvexError, v } from "convex/values";

const list = query({
  returns: v.array(
    v.object({
      ...systemFields("messages"),
      ...messageFields
    })
  ),
  handler: async ctx => {
    const messages = await ctx.db.query("messages").collect();
    return messages;
  }
});

const updateTextPart = mutation({
  args: {
    messageId: v.id("messages"),
    newTextPart: textPartValidator
  },
  returns: v.null(),
  handler: async (ctx, { messageId, newTextPart }) => {
    const updatedMessage = await ctx.db.get(messageId);
    if (!updatedMessage) {
      throw new ConvexError("Message not found");
    }
    await ctx.db.patch(updatedMessage._id, {
      parts: [
        {
          type: "text",
          text: newTextPart.text,
          state: newTextPart.state
        }
      ]
    });
  }
});

const send = mutation({
  args: {
    prompt: v.string()
  },
  returns: v.null(),
  handler: async (ctx, { prompt }) => {
    const userMessage: WithoutSystemFields<Doc<"messages">> = {
      role: "user",
      parts: [
        {
          type: "text",
          text: prompt,
          state: "done"
        }
      ]
    };
    await ctx.db.insert("messages", userMessage);

    const assistantMessage: WithoutSystemFields<Doc<"messages">> = {
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "",
          state: "streaming"
        }
      ]
    };
    const assistantMessageId = await ctx.db.insert(
      "messages",
      assistantMessage
    );

    const messages = await ctx.db.query("messages").collect();

    await ctx.scheduler.runAfter(0, api.actions.generateAIResponse, {
      messages,
      assistantMessageId
    });
  }
});

export { list, updateTextPart, send };
