import { matchListQuerySchema } from "../schemas/match/match-list-query.schema";
import { runningMatchListSchema } from "../schemas/match/running-match-list.schema";
import { MatchRepository } from "../../infrastructure/repositories/match.repository";
import { upcomingMatchListShema } from "../schemas/match/upcoming-match-list.schema";

export interface MatchServiceProtocol {
  getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof upcomingMatchListShema._type>;
  getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof runningMatchListSchema._type>;
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
