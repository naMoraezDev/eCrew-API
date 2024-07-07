import { matchSchema } from "../../domain/schemas/match/match.schema";
import { matchListSchema } from "../../domain/schemas/match/match-list.schema";

export function formatMatches(matchListData: typeof matchListSchema._type) {
  return matchListData.map((match) => {
    return {
      id: match.id || null,
      slug: match.slug || null,
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
      tournament: {
        begin_at: match.tournament?.begin_at || null,
        detailed_stats: match.tournament?.detailed_stats || null,
        end_at: match.tournament?.end_at || null,
        has_bracket: match.tournament?.has_bracket || null,
        id: match.tournament?.id || null,
        league_id: match.tournament?.league_id || null,
        live_supported: match.tournament?.live_supported || null,
        modified_at: match.tournament?.modified_at || null,
        name: match.tournament?.name || null,
        prizepool: match.tournament?.prizepool || null,
        serie_id: match.tournament?.serie_id || null,
        slug: match.tournament?.slug || null,
        tier: match.tournament?.tier || null,
        winner_id: match.tournament?.winner_id || null,
        winner_type: match.tournament?.winner_type || null,
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
      results: match.results.map((result) => {
        return {
          score: result.score || 0,
          team_id: result.team_id || null,
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

export function formatMatch(matchData: typeof matchSchema._type) {
  return {
    id: matchData.id || null,
    slug: matchData.slug || null,
    name: matchData.name || null,
    begin_at: matchData.begin_at || null,
    end_at: matchData.end_at || null,
    status: matchData.status || null,
    number_of_games: matchData.number_of_games || null,
    draw: matchData.draw || null,
    forfeit: matchData.forfeit || null,
    serie: {
      begin_at: matchData.serie?.begin_at || null,
      end_at: matchData.serie?.end_at || null,
      full_name: matchData.serie?.full_name || null,
      id: matchData.serie?.id || null,
      league_id: matchData.serie?.league_id || null,
      modified_at: matchData.serie?.modified_at || null,
      name: matchData.serie?.name || null,
      slug: matchData.serie?.slug || null,
      winner_id: matchData.serie?.winner_id || null,
      winner_type: matchData.serie?.winner_type || null,
      year: matchData.serie?.year || null,
    },
    videogame: {
      id: matchData.videogame?.id || null,
      name: matchData.videogame?.name || null,
      slug: matchData.videogame?.slug || null,
    },
    league: {
      id: matchData.league?.id || null,
      name: matchData.league?.name || null,
      slug: matchData.league?.slug || null,
      image_url: matchData.league?.image_url || null,
    },
    tournament: {
      begin_at: matchData.tournament?.begin_at || null,
      detailed_stats: matchData.tournament?.detailed_stats || null,
      end_at: matchData.tournament?.end_at || null,
      has_bracket: matchData.tournament?.has_bracket || null,
      id: matchData.tournament?.id || null,
      league_id: matchData.tournament?.league_id || null,
      live_supported: matchData.tournament?.live_supported || null,
      modified_at: matchData.tournament?.modified_at || null,
      name: matchData.tournament?.name || null,
      prizepool: matchData.tournament?.prizepool || null,
      serie_id: matchData.tournament?.serie_id || null,
      slug: matchData.tournament?.slug || null,
      tier: matchData.tournament?.tier || null,
      winner_id: matchData.tournament?.winner_id || null,
      winner_type: matchData.tournament?.winner_type || null,
    },
    streams_list: matchData.streams_list?.map((stream) => {
      return {
        main: stream.main || false,
        raw_url: stream.raw_url || null,
        language: stream.language || null,
        official: stream.official || false,
        embed_url: stream.embed_url || null,
      };
    }),
    results: matchData.results?.map((result) => {
      return {
        score: result.score || 0,
        team_id: result.team_id || null,
      };
    }),
    opponents: matchData.opponents?.map((opponent) => {
      return {
        opponent: {
          id: opponent.opponent?.id || null,
          name: opponent.opponent?.name || null,
          slug: opponent.opponent?.slug || null,
          acronym: opponent.opponent?.acronym || null,
          location: opponent.opponent?.location || null,
          image_url: opponent.opponent?.image_url || null,
        },
      };
    }),
  };
}
