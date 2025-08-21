import { ConvexProvider, ConvexReactClient } from "convex/react";
import { env } from "@/lib/env";

const convex = new ConvexReactClient(env.VITE_CONVEX_URL);

function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

export { ConvexClientProvider };
