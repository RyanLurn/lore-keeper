import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function capitalizeFirstLetter(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { cn, capitalizeFirstLetter };
