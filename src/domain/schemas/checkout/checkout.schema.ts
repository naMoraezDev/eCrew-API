import { z } from "zod";

export const checkoutSchema = z.object({
  sessionId: z.string(),
});
