import { z } from "zod";

export const teamSchema = z.object({
  acronym: z.string().nullable(),
  current_videogame: z
    .object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
    })
    .nullable(),
  id: z.number().nullable(),
  image_url: z.string().nullable(),
  location: z.string().nullable(),
  modified_at: z.string().nullable(),
  name: z.string().nullable(),
  players: z
    .array(
      z.object({
        active: z.boolean().nullable(),
        age: z.number().nullable(),
        birthday: z.string().nullable(),
        first_name: z.string().nullable(),
        id: z.number().nullable(),
        image_url: z.string().nullable(),
        last_name: z.string().nullable(),
        modified_at: z.string().nullable(),
        name: z.string().nullable(),
        nationality: z.string().nullable(),
        role: z.string().nullable(),
        slug: z.string().nullable(),
      })
    )
    .nullable(),
  slug: z.string().nullable(),
});
