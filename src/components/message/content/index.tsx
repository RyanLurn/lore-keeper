import type { Doc } from "backend/_generated/dataModel";
import { TextPart } from "@/components/message/content/text-part";
import { cn } from "@/lib/utils";

function MessageContent({
  _id,
  parts,
  className
}: Pick<Doc<"messages">, "_id" | "parts"> & {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 overflow-hidden rounded-lg px-4 py-3 text-sm text-foreground",
        "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
        "group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
        className
      )}
    >
      {parts.map((part, i) => {
        switch (part.type) {
          case "text":
            return <TextPart key={`${_id}-${i}`} text={part.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export { MessageContent };
