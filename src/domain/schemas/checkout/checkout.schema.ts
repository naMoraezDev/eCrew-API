import { z } from "zod";

export const checkoutSchema = z.object({
  sessionUrl: z.string().nullable(),
});
