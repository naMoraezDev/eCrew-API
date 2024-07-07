import {
  formatMatch,
  formatMatches,
} from "../../infrastructure/utils/format-matches";
import { FastifyReply, FastifyRequest } from "fastify";
import { MatchService } from "../../domain/services/match.service";
// import { saveDataToCache } from "../../infrastructure/utils/cache";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";

export class MatchController {
  constructor(readonly matchService: MatchService) {}

  public async getMatchById(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { id: string };
    const { id } = params;
    const match = await this.matchService.getMatchById(id);
    return reply.status(200).send(formatMatch(match));
  }

  public async getUpcomingMatchList(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const query = request.query as typeof matchListQuerySchema._type;
    const matchList = await this.matchService.getUpcomingMatchList(query);
    // await saveDataToCache(request, matchList);
    return reply.status(200).send(formatMatches(matchList));
  }

  public async getRunningMatchList(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const query = request.query as typeof matchListQuerySchema._type;
    const matchList = await this.matchService.getRunningMatchList(query);
    // await saveDataToCache(request, matchList);
    return reply.status(200).send(formatMatches(matchList));
  }
}
