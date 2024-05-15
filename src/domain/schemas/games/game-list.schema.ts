import { z } from "zod";

export const gameListSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    icon_url: z.string(),
    logo_url: z.string(),
  })
);
