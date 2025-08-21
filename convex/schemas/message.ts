import { defineTable } from "convex/server";
import { v } from "convex/values";

const textPartValidator = v.object({
  type: v.literal("text"),
  text: v.string(),
  state: v.optional(v.union(v.literal("streaming"), v.literal("done")))
});

const reasoningPartValidator = v.object({
  type: v.literal("text"),
  text: v.string(),
  state: v.optional(v.union(v.literal("streaming"), v.literal("done"))),
  providerMetadata: v.optional(v.record(v.string(), v.any()))
});

const messagePartValidator = v.union(textPartValidator, reasoningPartValidator);

const messageFields = {
  role: v.union(v.literal("system"), v.literal("user"), v.literal("assistant")),
  metadata: v.optional(v.any()),
  parts: v.array(messagePartValidator)
};

const messagesTable = defineTable(messageFields);

export { messageFields, messagesTable };
