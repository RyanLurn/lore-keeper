import { messagesTable } from "backend/schemas/message";
import { defineSchema } from "convex/server";

export default defineSchema({
  messages: messagesTable
});
