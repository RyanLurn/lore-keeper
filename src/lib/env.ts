import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_CONVEX_URL: z.url()
  },
  runtimeEnv: import.meta.env
});

export { env };
