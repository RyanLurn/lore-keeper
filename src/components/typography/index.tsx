import { type HTMLAttributes, memo } from "react";
import { cn } from "@/lib/utils";

const TypographyH1 = memo(function TypographyH1({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});

const TypographyH2 = memo(function TypographyH2({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

const TypographyH3 = memo(function TypographyH3({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

const TypographyH4 = memo(function TypographyH4({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
});

const TypographyP = memo(function TypographyP({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
});

const TypographyBlockquote = memo(function TypographyBlockquote({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
});

const TypographyLink = memo(function TypographyLink({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn("font-medium text-primary underline", className)}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
});

const TypographyStrong = memo(function TypographyStrong({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <strong className={cn("font-semibold", className)} {...props}>
      {children}
    </strong>
  );
});

const TypographyEmphasis = memo(function TypographyEmphasis({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <em className={cn("italic", className)} {...props}>
      {children}
    </em>
  );
});

const TypographyOrderedList = memo(function TypographyOrderedList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "my-2 ml-2 list-inside list-decimal [&>li]:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
});

const TypographyUnorderedList = memo(function TypographyUnorderedList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-2 ml-2 list-inside list-disc [&>li]:mt-2", className)}
      {...props}
    >
      {children}
    </ul>
  );
});

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyLink,
  TypographyStrong,
  TypographyEmphasis,
  TypographyOrderedList,
  TypographyUnorderedList
};
