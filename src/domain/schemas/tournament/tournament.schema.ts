import { z } from "zod";

export const tournamentSchema = z.object({
  begin_at: z.string().nullable(),
  detailed_stats: z.boolean().nullable(),
  end_at: z.string().nullable(),
  expected_roster: z.array(
    z.union([
      z
        .object({
          players: z.array(
            z.union([
              z
                .object({
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
                .nullable(),
              z
                .object({
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
                .nullable(),
            ])
          ),
          team: z
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
        })
        .nullable(),
      z
        .object({
          players: z.array(
            z
              .object({
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
              .nullable()
          ),
          team: z
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
        })
        .nullable(),
      z
        .object({
          players: z.array(
            z.union([
              z
                .object({
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
                .nullable(),
              z
                .object({
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
                .nullable(),
            ])
          ),
          team: z
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
        })
        .nullable(),
    ])
  ),
  has_bracket: z.boolean().nullable(),
  id: z.number().nullable(),
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
  league_id: z.number().nullable(),
  live_supported: z.boolean().nullable(),
  matches: z.array(
    z.union([
      z
        .object({
          begin_at: z.string().nullable(),
          detailed_stats: z.boolean().nullable(),
          draw: z.boolean().nullable(),
          end_at: z.string().nullable(),
          forfeit: z.boolean().nullable(),
          game_advantage: z.any().nullable(),
          id: z.number().nullable(),
          live: z.object({
            opens_at: z.string().nullable(),
            supported: z.boolean().nullable(),
            url: z.string().nullable(),
          }),
          match_type: z.string().nullable(),
          modified_at: z.string().nullable(),
          name: z.string().nullable(),
          number_of_games: z.number().nullable(),
          original_scheduled_at: z.string().nullable(),
          rescheduled: z.boolean().nullable(),
          scheduled_at: z.string().nullable(),
          slug: z.string().nullable(),
          status: z.string().nullable(),
          streams_list: z.array(z.unknown().nullable()),
          tournament_id: z.number().nullable(),
          winner_id: z.number().nullable(),
          winner_type: z.string().nullable(),
        })
        .nullable(),
      z
        .object({
          begin_at: z.string().nullable(),
          detailed_stats: z.boolean().nullable(),
          draw: z.boolean().nullable(),
          end_at: z.string().nullable(),
          forfeit: z.boolean().nullable(),
          game_advantage: z.any().nullable(),
          id: z.number().nullable(),
          live: z
            .object({
              opens_at: z.string().nullable(),
              supported: z.boolean().nullable(),
              url: z.string().nullable(),
            })
            .nullable(),
          match_type: z.string().nullable(),
          modified_at: z.string().nullable(),
          name: z.string().nullable(),
          number_of_games: z.number().nullable(),
          original_scheduled_at: z.string().nullable(),
          rescheduled: z.boolean().nullable(),
          scheduled_at: z.string().nullable(),
          slug: z.string().nullable(),
          status: z.string().nullable(),
          streams_list: z.array(z.unknown().nullable()),
          tournament_id: z.number().nullable(),
          winner_id: z.number().nullable(),
          winner_type: z.string().nullable(),
        })
        .nullable(),
    ])
  ),
  modified_at: z.string().nullable(),
  name: z.string().nullable(),
  prizepool: z.string().nullable(),
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
  serie_id: z.number().nullable(),
  slug: z.string().nullable(),
  teams: z.array(
    z
      .object({
        acronym: z.string().nullable(),
        id: z.number().nullable(),
        image_url: z.string().nullable(),
        location: z.string().nullable(),
        modified_at: z.string().nullable(),
        name: z.string().nullable(),
        slug: z.string().nullable(),
      })
      .nullable()
  ),
  tier: z.string().nullable(),
  videogame: z
    .object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
    })
    .nullable(),
  videogame_title: z
    .object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      slug: z.string().nullable(),
      videogame_id: z.number().nullable(),
    })
    .nullable(),
  winner_id: z.number().nullable(),
  winner_type: z.string().nullable(),
});
