import { matchListSchema } from "../../domain/schemas/match/match-list.schema";

export function formatMatches(matchListData: typeof matchListSchema._type) {
  return matchListData.map((match) => {
    return {
      videogame: {
        id: match.videogame.id || null,
        name: match.videogame.name || null,
        slug: match.videogame.slug || null,
      },
      league: {
        id: match.league.id || null,
        name: match.league.name || null,
        slug: match.league.slug || null,
        image_url: match.league.image_url || null,
      },
      status: match.status || null,
      name: match.name || null,
      begin_at: match.begin_at || null,
      streams_list: match.streams_list.map((stream) => {
        return {
          main: stream.main || false,
          raw_url: stream.raw_url || null,
          language: stream.language || null,
          official: stream.official || false,
          embed_url: stream.embed_url || null,
        };
      }),
      opponents: match.opponents.map((opponent) => {
        return {
          opponent: {
            id: opponent.opponent.id || null,
            name: opponent.opponent.name || null,
            slug: opponent.opponent.slug || null,
            acronym: opponent.opponent.acronym || null,
            location: opponent.opponent.location || null,
            image_url: opponent.opponent.image_url || null,
          },
        };
      }),
    };
  });
}
