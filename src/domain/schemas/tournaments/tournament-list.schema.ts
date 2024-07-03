import { z } from "zod";

export const tournamentListSchema = z.array(
  z.object({
    begin_at: z.string(),
    detailed_stats: z.boolean(),
    end_at: z.string(),
    has_bracket: z.boolean(),
    id: z.number(),
    league: z.object({
      id: z.number(),
      image_url: z.string(),
      modified_at: z.string(),
      name: z.string(),
      slug: z.string(),
      url: z.string(),
    }),
    league_id: z.number(),
    live_supported: z.boolean(),
    matches: z.array(
      z.object({
        begin_at: z.string(),
        detailed_stats: z.boolean(),
        draw: z.boolean(),
        end_at: z.null(),
        forfeit: z.boolean(),
        game_advantage: z.null(),
        id: z.number(),
        live: z.object({
          opens_at: z.null(),
          supported: z.boolean(),
          url: z.null(),
        }),
        match_type: z.string(),
        modified_at: z.string(),
        name: z.string(),
        number_of_games: z.number(),
        original_scheduled_at: z.string(),
        rescheduled: z.boolean(),
        scheduled_at: z.string(),
        slug: z.string(),
        status: z.string(),
        streams_list: z.array(
          z.object({
            embed_url: z.null(),
            language: z.string(),
            main: z.boolean(),
            official: z.boolean(),
            raw_url: z.string(),
          })
        ),
        tournament_id: z.number(),
        winner_id: z.null(),
        winner_type: z.string(),
      })
    ),
    modified_at: z.string(),
    name: z.string(),
    prizepool: z.null(),
    serie: z.object({
      begin_at: z.string(),
      end_at: z.string(),
      full_name: z.string(),
      id: z.number(),
      league_id: z.number(),
      modified_at: z.string(),
      name: z.string(),
      season: z.null(),
      slug: z.string(),
      winner_id: z.null(),
      winner_type: z.string(),
      year: z.number(),
    }),
    serie_id: z.number(),
    slug: z.string(),
    teams: z.array(
      z.object({
        acronym: z.string(),
        id: z.number(),
        image_url: z.string(),
        location: z.string(),
        modified_at: z.string(),
        name: z.string(),
        slug: z.string(),
      })
    ),
    tier: z.string(),
    videogame: z.object({ id: z.number(), name: z.string(), slug: z.string() }),
    videogame_title: z.object({
      id: z.number(),
      name: z.string(),
      slug: z.string(),
      videogame_id: z.number(),
    }),
    winner_id: z.null(),
    winner_type: z.string(),
  })
);
