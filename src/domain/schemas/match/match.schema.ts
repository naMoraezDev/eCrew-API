import { z } from "zod";

export const matchSchema = z.object({
  league: z
    .object({
      id: z.number().nullable(),
      image_url: z.string().nullable(),
      modified_at: z.string().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
      url: z.string().nullable(),
    })
    .nullable(),
  status: z.string().nullable(),
  end_at: z.string().nullable(),
  tournament_id: z.number().nullable(),
  number_of_games: z.number().nullable(),
  id: z.number().nullable(),
  name: z.string().nullable(),
  serie_id: z.number().nullable(),
  winner_type: z.string().nullable(),
  live: z
    .object({
      opens_at: z.string().nullable(),
      supported: z.boolean().nullable(),
      url: z.string().nullable(),
    })
    .nullable(),
  league_id: z.number().nullable(),
  videogame_version: z.string().nullable(),
  forfeit: z.boolean().nullable(),
  opponents: z
    .array(
      z.object({
        opponent: z
          .object({
            acronym: z.string().nullable(),
            id: z.number().nullable(),
            image_url: z.string().nullable(),
            location: z.string().nullable(),
            modified_at: z.string().nullable(),
            name: z.string().nullable(),
            slug: z.string().nullable(),
          })
          .nullable(),
        type: z.string().nullable(),
      })
    )
    .nullable(),
  winner_id: z.number().nullable(),
  detailed_stats: z.boolean().nullable(),
  rescheduled: z.boolean().nullable(),
  slug: z.string().nullable(),
  modified_at: z.string().nullable(),
  games: z
    .array(
      z.object({
        begin_at: z.string().nullable(),
        complete: z.boolean().nullable(),
        detailed_stats: z.boolean().nullable(),
        end_at: z.string().nullable(),
        finished: z.boolean().nullable(),
        forfeit: z.boolean().nullable(),
        id: z.number().nullable(),
        length: z.number().nullable(),
        match_id: z.number().nullable(),
        position: z.number().nullable(),
        status: z.string().nullable(),
        winner: z
          .object({
            id: z.number().nullable(),
            type: z.string().nullable(),
          })
          .nullable(),
        winner_type: z.string().nullable(),
      })
    )
    .nullable(),
  draw: z.boolean().nullable(),
  serie: z
    .object({
      begin_at: z.string().nullable(),
      end_at: z.string().nullable(),
      full_name: z.string().nullable(),
      id: z.number().nullable(),
      league_id: z.number().nullable(),
      modified_at: z.string().nullable(),
      name: z.string().nullable(),
      season: z.string().nullable(),
      slug: z.string().nullable(),
      winner_id: z.number().nullable(),
      winner_type: z.string().nullable(),
      year: z.number().nullable(),
    })
    .nullable(),
  begin_at: z.string().nullable(),
  original_scheduled_at: z.string().nullable(),
  videogame: z
    .object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
    })
    .nullable(),
  scheduled_at: z.string().nullable(),
  match_type: z.string().nullable(),
  videogame_title: z.string().nullable(),
  winner: z.any().nullable(),
  streams_list: z
    .array(
      z.object({
        embed_url: z.string().nullable(),
        language: z.string().nullable(),
        main: z.boolean().nullable(),
        official: z.boolean().nullable(),
        raw_url: z.string().nullable(),
      })
    )
    .nullable(),
  game_advantage: z.any().nullable(),
  tournament: z
    .object({
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
    })
    .nullable(),
  results: z
    .array(
      z.object({ score: z.number().nullable(), team_id: z.number().nullable() })
    )
    .nullable(),
});
