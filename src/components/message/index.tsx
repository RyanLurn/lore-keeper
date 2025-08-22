import { memo } from "react";
import type { Doc } from "backend/_generated/dataModel";
import { MessageAvatar } from "@/components/message/avatar";
import { MessageContent } from "@/components/message/content";
import { cn } from "@/lib/utils";

const Message = memo(function Message({
  className,
  message
}: {
  className?: string;
  message: Doc<"messages">;
}) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4",
        message.role === "user"
          ? "is-user"
          : "is-assistant flex-row-reverse justify-end",
        "[&>div]:max-w-[80%]",
        className
      )}
    >
      <MessageContent _id={message._id} parts={message.parts} />
      <MessageAvatar role={message.role} />
    </div>
  );
});

export { Message };
