import { File } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <Button size="icon" variant="outline" disabled={isDisabled}>
        <File />
      </Button>
    </div>
  );
}

export { PromptInputTools };
