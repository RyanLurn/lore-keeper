import { memo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/typography/markdown";
import { cn } from "@/lib/utils";

const TextPart = memo(function TextPart({
  className,
  text
}: {
  className?: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
        className
      )}
    >
      <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
        {text === "" ? "*Thinking...*" : text}
      </Markdown>
    </div>
  );
});

export { TextPart };
