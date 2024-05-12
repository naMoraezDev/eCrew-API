import { z } from "zod";

export const formattedMatchListSchema = z.array(
  z.object({
    videogame: z.object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
    }),
    league: z.object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
      image_url: z.string().nullable(),
    }),
    status: z.string().nullable(),
    name: z.string().nullable(),
    begin_at: z.string().nullable(),
    streams_list: z.array(
      z.object({
        main: z.boolean(),
        raw_url: z.string().nullable(),
        language: z.string().nullable(),
        official: z.boolean(),
        embed_url: z.string().nullable(),
      })
    ),
    opponents: z.array(
      z.object({
        opponent: z.object({
          id: z.number().nullable(),
          name: z.string().nullable(),
          slug: z.string().nullable(),
          acronym: z.string().nullable(),
          location: z.string().nullable(),
          image_url: z.string().nullable(),
        }),
      })
    ),
  })
);
