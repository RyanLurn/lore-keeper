import { mutation, query } from "backend/_generated/server";
import { messageFields, textPartValidator } from "backend/schemas/message";
import { systemFields } from "backend/schemas/systemFields";
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

export { list, updateTextPart };
