import { Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PromptInputSendButton({
  className,
  status,
  disabled
}: {
  className?: string;
  status: "streaming" | "done";
  disabled: boolean;
}) {
  let Icon = <SendIcon className="size-4" />;

  if (status === "streaming") {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else {
    Icon = <SendIcon className="size-4" />;
  }

  return (
    <Button
      className={cn("gap-1.5 rounded-lg", className)}
      size="icon"
      type="submit"
      disabled={disabled}
    >
      {Icon}
    </Button>
  );
}

export { PromptInputSendButton };
