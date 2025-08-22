import { memo } from "react";
import type { Doc } from "backend/_generated/dataModel";
import { StickToBottom } from "use-stick-to-bottom";
import { ScrollButton } from "@/components/conversation/scroll-button";
import { Message } from "@/components/message";
import ScreenLoader from "@/components/screen-loader";
import { CHAT_CONTAINER_WIDTH } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Conversation = memo(function Conversation({
  className,
  messages
}: {
  className?: string;
  messages: Doc<"messages">[] | undefined;
}) {
  return (
    <StickToBottom
      initial="smooth"
      resize="smooth"
      role="log"
      className={cn(
        "relative flex w-full flex-col gap-y-3 overflow-y-auto",
        className
      )}
    >
      <StickToBottom.Content
        className={cn("flex flex-col gap-4 p-4", CHAT_CONTAINER_WIDTH)}
      >
        {messages === undefined ? (
          <ScreenLoader parentName="messages" />
        ) : (
          messages.map(message => (
            <Message key={message._id} message={message} />
          ))
        )}
      </StickToBottom.Content>
      <ScrollButton />
    </StickToBottom>
  );
});

export { Conversation };
