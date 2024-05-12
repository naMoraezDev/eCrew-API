import { Pandascore } from "../pandascore/pandascore";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { runningMatchListSchema } from "../../domain/schemas/match/running-match-list.schema";
import { upcomingMatchListSchema } from "../../domain/schemas/match/upcoming-match-list.schema";

export interface MatchRepositoryProtocol {
  getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof upcomingMatchListSchema._type>;
  getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof runningMatchListSchema._type>;
}

export class MatchRepository implements MatchRepositoryProtocol {
  public async getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof upcomingMatchListSchema._type> {
    return await new Pandascore(httpClientFactory()).getUpcomingMatchList(
      query
    );
  }

  public async getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof runningMatchListSchema._type> {
    return await new Pandascore(httpClientFactory()).getRunningMatchList(query);
  }
}
