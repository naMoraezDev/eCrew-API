import { matchListQuerySchema } from "../schemas/match/match-list-query.schema";
import { MatchRepository } from "../../infrastructure/repositories/match.repository";
import { formattedMatchListSchema } from "../schemas/match/formatted-match-list.schema";

export interface MatchServiceProtocol {
  getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type>;
  getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof formattedMatchListSchema._type>;
}

export class MatchService implements MatchServiceProtocol {
  constructor(readonly matchRepository: MatchRepository) {}

  public async getUpcomingMatchList(query: typeof matchListQuerySchema._type) {
    return await this.matchRepository.getUpcomingMatchList(query);
  }

  public async getRunningMatchList(query: typeof matchListQuerySchema._type) {
    return await this.matchRepository.getRunningMatchList(query);
  }
}
