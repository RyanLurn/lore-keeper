import { memo } from "react";
import { PromptInputSendButton } from "@/components/prompt-input/send-button";
import { PromptInputTools } from "@/components/prompt-input/tools";
import { cn } from "@/lib/utils";

const PromptInputToolbar = memo(function PromptInputToolbar({
  className,
  sendDisabled,
  status
}: {
  className?: string;
  sendDisabled: boolean;
  status: "streaming" | "done";
}) {
  return (
    <div className={cn("flex items-center justify-between p-1", className)}>
      <PromptInputTools />
      <PromptInputSendButton disabled={sendDisabled} status={status} />
    </div>
  );
});

export { PromptInputToolbar };
