import { convertToModelMessages, generateText } from "ai";
import { api } from "backend/_generated/api";
import { action } from "backend/_generated/server";
import { groq } from "backend/lib/groq";
import { messageFields } from "backend/schemas/message";
import { systemFields } from "backend/schemas/systemFields";
import { v } from "convex/values";

const generateAIResponse = action({
  args: {
    messages: v.array(
      v.object({
        ...systemFields("messages"),
        ...messageFields
      })
    ),
    assistantMessageId: v.id("messages")
  },
  returns: v.null(),
  handler: async (ctx, { messages, assistantMessageId }) => {
    try {
      const { text } = await generateText({
        model: groq("llama-3.1-8b-instant"),
        messages: convertToModelMessages(messages)
      });
      await ctx.runMutation(api.message.updateTextPart, {
        messageId: assistantMessageId,
        newTextPart: {
          type: "text",
          text,
          state: "done"
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
});

export { generateAIResponse };
