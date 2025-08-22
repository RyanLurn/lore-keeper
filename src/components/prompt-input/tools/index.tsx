import { ClearChatTool } from "@/components/prompt-input/tools/clear-chat";
import { cn } from "@/lib/utils";

function PromptInputTools({
  className,
  isDisabled
}: {
  className?: string;
  isDisabled: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        "[&_button:first-child]:rounded-bl-xl",
        className
      )}
    >
      <ClearChatTool isDisabled={isDisabled} />
    </div>
  );
}

export { PromptInputTools };
