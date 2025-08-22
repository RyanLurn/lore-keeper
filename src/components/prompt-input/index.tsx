import type { ChangeEvent, FormEvent } from "react";
import { memo } from "react";
import { PromptInputEditor } from "@/components/prompt-input/editor";
import { PromptInputToolbar } from "@/components/prompt-input/toolbar";
import { CHAT_CONTAINER_WIDTH } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PromptInput = memo(function PromptInput({
  className,
  sendHandler,
  prompt,
  promptChangeHandler,
  status,
  isDisabled
}: {
  className?: string;
  sendHandler: (e: FormEvent<HTMLFormElement>) => void;
  prompt: string;
  promptChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  status: "streaming" | "done";
  isDisabled: boolean;
}) {
  return (
    <form
      className={cn(
        "flex flex-col divide-y-2 overflow-hidden rounded-xl border bg-background shadow-sm",
        CHAT_CONTAINER_WIDTH,
        className
      )}
      onSubmit={sendHandler}
    >
      <PromptInputEditor
        prompt={prompt}
        promptChangeHandler={promptChangeHandler}
        isDisabled={isDisabled}
      />
      <PromptInputToolbar
        sendDisabled={isDisabled || !prompt}
        status={status}
      />
    </form>
  );
});

export { PromptInput };
