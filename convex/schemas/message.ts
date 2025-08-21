import { defineTable } from "convex/server";
import { v } from "convex/values";

const textPart = v.object({
  type: v.literal("text"),
  text: v.string(),
  state: v.optional(v.union(v.literal("streaming"), v.literal("done")))
});

const reasoningPart = v.object({
  type: v.literal("text"),
  text: v.string(),
  state: v.optional(v.union(v.literal("streaming"), v.literal("done"))),
  providerMetadata: v.optional(v.record(v.string(), v.any()))
});

const messagePart = v.union(textPart, reasoningPart);

const message = v.object({
  role: v.union(v.literal("system"), v.literal("user"), v.literal("assistant")),
  metadata: v.optional(v.any()),
  parts: v.array(messagePart)
});

const messagesTable = defineTable(message);

export { messagesTable };
