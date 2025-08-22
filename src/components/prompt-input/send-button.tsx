import { Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PromptInputSendButton({
  className,
  isDisabled
}: {
  className?: string;
  isDisabled: boolean;
}) {
  return (
    <Button
      className={cn("gap-1.5 rounded-lg", className)}
      size="icon"
      type="submit"
      disabled={isDisabled}
    >
      {isDisabled ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <SendIcon className="size-4" />
      )}
    </Button>
  );
}

export { PromptInputSendButton };
