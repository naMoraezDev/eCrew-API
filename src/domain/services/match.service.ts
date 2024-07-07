import { matchSchema } from "../schemas/match/match.schema";
import { matchListSchema } from "../schemas/match/match-list.schema";
import { matchListQuerySchema } from "../schemas/match/match-list-query.schema";
import { MatchRepository } from "../../infrastructure/repositories/match.repository";

export interface MatchServiceProtocol {
  getMatchById(id: string): Promise<typeof matchSchema._type>;
  getMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof matchListSchema._type>;
  getUpcomingMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof matchListSchema._type>;
  getRunningMatchList(
    query: typeof matchListQuerySchema._type
  ): Promise<typeof matchListSchema._type>;
}

export class MatchService implements MatchServiceProtocol {
  constructor(readonly matchRepository: MatchRepository) {}

  public async getMatchById(id: string) {
    return await this.matchRepository.getMatchById(id);
  }

  public async getMatchList(query: typeof matchListQuerySchema._type) {
    return await this.matchRepository.getMatchList(query);
  }

  public async getUpcomingMatchList(query: typeof matchListQuerySchema._type) {
    return await this.matchRepository.getUpcomingMatchList(query);
  }

  public async getRunningMatchList(query: typeof matchListQuerySchema._type) {
    return await this.matchRepository.getRunningMatchList(query);
  }
}
