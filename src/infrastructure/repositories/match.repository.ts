import { Pandascore } from "../pandascore/pandascore";
import { matchSchema } from "../../domain/schemas/match/match.schema";
import { MatchServiceProtocol } from "../../domain/services/match.service";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { matchListSchema } from "../../domain/schemas/match/match-list.schema";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";

export class MatchRepository implements MatchServiceProtocol {
  public async getMatchById(id: string): Promise<typeof matchSchema._type> {
    const matchData = await new Pandascore(httpClientFactory()).getMatchById(
      id
    );
    return matchData;
  }
  public async getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof matchListSchema._type> {
    const matchListData = await new Pandascore(
      httpClientFactory()
    ).getUpcomingMatchList(query);
    return matchListData;
  }

  public async getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof matchListSchema._type> {
    const matchListData = await new Pandascore(
      httpClientFactory()
    ).getRunningMatchList(query);
    return matchListData;
  }
}
