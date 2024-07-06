import { z } from "zod";

export const tagListSchema = z.object({
  data: z.object({
    tags: z.object({
      edges: z.array(
        z.object({
          node: z.object({
            id: z.string(),
            slug: z.string(),
            name: z.string(),
            count: z.number().nullable(),
          }),
        })
      ),
    }),
  }),
  extensions: z.object({
    debug: z.array(z.object({ type: z.string(), message: z.string() })),
  }),
});
