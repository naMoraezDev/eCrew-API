import { z } from "zod";

export const tagSchema = z.object({
  ID: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  post_count: z.number(),
  feed_url: z.string(),
  meta: z.object({
    links: z.object({ self: z.string(), help: z.string(), site: z.string() }),
  }),
});
