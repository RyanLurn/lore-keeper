import { query } from "backend/_generated/server";
import { messageFields } from "backend/schemas/message";
import { systemFields } from "backend/schemas/systemFields";
import { v } from "convex/values";

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

export { list };
