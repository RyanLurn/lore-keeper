import { api } from "backend/_generated/api";
import { useMutation } from "convex/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

function ClearChatTool({
  className,
  isDisabled
}: {
  className?: string;
  isDisabled: boolean;
}) {
  const clearChat = useMutation(api.message.clear);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={className}
          size="icon"
          variant="destructive"
          disabled={isDisabled}
          onClick={() => clearChat()}
        >
          <X />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Clear chat</p>
      </TooltipContent>
    </Tooltip>
  );
}

export { ClearChatTool };
