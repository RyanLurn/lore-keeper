/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Options } from "react-markdown";
import {
  TypographyBlockquote,
  TypographyEmphasis,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLink,
  TypographyOrderedList,
  TypographyP,
  TypographyStrong,
  TypographyUnorderedList
} from "@/components/typography";
import { cn } from "@/lib/utils";

const markdownComponents: Options["components"] = {
  strong: ({ node, children, className, ...props }) => (
    // Ignore ^ intentionally for optimizing rerenders during streaming
    <TypographyStrong className={cn("", className)} {...props}>
      {children}
    </TypographyStrong>
  ),
  em: ({ node, children, className, ...props }) => (
    <TypographyEmphasis className={cn("", className)} {...props}>
      {children}
    </TypographyEmphasis>
  ),
  a: ({ node, children, className, ...props }) => (
    <TypographyLink className={cn("", className)} {...props}>
      {children}
    </TypographyLink>
  ),
  h1: ({ node, children, className, ...props }) => (
    <TypographyH1 className={cn("mb-8", className)} {...props}>
      {children}
    </TypographyH1>
  ),
  h2: ({ node, children, className, ...props }) => (
    <TypographyH2 className={cn("mb-6", className)} {...props}>
      {children}
    </TypographyH2>
  ),
  h3: ({ node, children, className, ...props }) => (
    <TypographyH3 className={cn("mb-4", className)} {...props}>
      {children}
    </TypographyH3>
  ),
  h4: ({ node, children, className, ...props }) => (
    <TypographyH4 className={cn("mb-2", className)} {...props}>
      {children}
    </TypographyH4>
  ),
  p: ({ node, children, className, ...props }) => (
    <TypographyP className={cn("", className)} {...props}>
      {children}
    </TypographyP>
  ),
  blockquote: ({ node, children, className, ...props }) => (
    <TypographyBlockquote className={cn("", className)} {...props}>
      {children}
    </TypographyBlockquote>
  ),
  ol: ({ node, children, className, ...props }) => (
    <TypographyOrderedList className={cn("", className)} {...props}>
      {children}
    </TypographyOrderedList>
  ),
  ul: ({ node, children, className, ...props }) => (
    <TypographyUnorderedList className={cn("", className)} {...props}>
      {children}
    </TypographyUnorderedList>
  )
};

export { markdownComponents };
