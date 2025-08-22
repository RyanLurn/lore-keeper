import type { Doc } from "backend/_generated/dataModel";
import { MessageAvatar } from "@/components/message/avatar";
import { MessageContent } from "@/components/message/content";
import { cn } from "@/lib/utils";

function Message({
  _id,
  role,
  parts,
  className
}: Pick<Doc<"messages">, "_id" | "role" | "parts"> & {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4",
        role === "user"
          ? "is-user"
          : "is-assistant flex-row-reverse justify-end",
        "[&>div]:max-w-[80%]",
        className
      )}
    >
      <MessageContent _id={_id} parts={parts} />
      <MessageAvatar role={role} />
    </div>
  );
}

export { Message };
