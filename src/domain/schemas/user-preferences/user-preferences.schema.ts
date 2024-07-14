import { z } from "zod";

export const userPreferencesSchema = z.object({
  uid: z.string(),
  newsletter: z.boolean().nullable().optional(),
  subscription: z.boolean().nullable().optional(),
  stripe_customer_id: z.string().nullable().optional(),
  saved_posts: z.array(z.string()).nullable().optional(),
});
