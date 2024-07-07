import { z } from "zod";

export const formattedMatchSchema = z.object({
  id: z.number().nullable(),
  slug: z.string().nullable(),
  name: z.string().nullable(),
  begin_at: z.string().nullable(),
  end_at: z.string().nullable(),
  status: z.string().nullable(),
  number_of_games: z.number().nullable(),
  draw: z.boolean().nullable(),
  forfeit: z.boolean().nullable(),
  serie: z.object({
    begin_at: z.string().nullable(),
    end_at: z.string().nullable(),
    full_name: z.string().nullable(),
    id: z.number().nullable(),
    league_id: z.number().nullable(),
    modified_at: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    winner_id: z.number().nullable(),
    winner_type: z.string().nullable(),
    year: z.number().nullable(),
  }),
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
  tournament: z.object({
    begin_at: z.string().nullable(),
    detailed_stats: z.boolean().nullable(),
    end_at: z.string().nullable(),
    has_bracket: z.boolean().nullable(),
    id: z.number().nullable(),
    league_id: z.number().nullable(),
    live_supported: z.boolean().nullable(),
    modified_at: z.string().nullable(),
    name: z.string().nullable(),
    prizepool: z.string().nullable(),
    serie_id: z.number().nullable(),
    slug: z.string().nullable(),
    tier: z.string().nullable(),
    winner_id: z.number().nullable(),
    winner_type: z.string().nullable(),
  }),
  streams_list: z.array(
    z.object({
      main: z.boolean(),
      raw_url: z.string().nullable(),
      language: z.string().nullable(),
      official: z.boolean().nullable(),
      embed_url: z.string().nullable(),
    })
  ),
  results: z.array(
    z.object({
      score: z.number().nullable(),
      team_id: z.number().nullable(),
    })
  ),
  opponents: z.array(
    z.object({
      opponent: z.object({
        id: z.number().nullable(),
        slug: z.string().nullable(),
        name: z.string().nullable(),
        acronym: z.string().nullable(),
        location: z.string().nullable(),
        image_url: z.string().nullable(),
      }),
    })
  ),
});
