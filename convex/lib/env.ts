import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

const env = createEnv({
  server: {
    GROQ_API_KEY: z.string().min(1)
  },
  runtimeEnv: process.env
});

export { env };
