import { FastifyReply, FastifyRequest } from "fastify";
import { TournamentsService } from "../../domain/services/tournaments.service";

export class TournamentsController {
  constructor(readonly tournamentsService: TournamentsService) {}

  public async getRunningCodMWTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningCodMWTournaments();
    return reply.status(200).send(tournamentList);
  }
}
