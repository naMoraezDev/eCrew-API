import { Pandascore } from "../pandascore/pandascore";
import { formatMatches } from "../utils/format-matches";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { formattedMatchListSchema } from "../../domain/schemas/match/formatted-match-list.schema";

export interface MatchRepositoryProtocol {
  getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type>;
  getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type>;
}

export class MatchRepository implements MatchRepositoryProtocol {
  public async getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type> {
    const matchListData = await new Pandascore(
      httpClientFactory()
    ).getUpcomingMatchList(query);
    return formatMatches(matchListData);
  }

  public async getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type> {
    const matchListData = await new Pandascore(
      httpClientFactory()
    ).getRunningMatchList(query);
    return formatMatches(matchListData);
  }
}
