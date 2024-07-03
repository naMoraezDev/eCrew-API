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

  public async getRunningLoLTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningLoLTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningCsGoTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningCsGoTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningDota2Tournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningDota2Tournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningR6SiegeTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningR6SiegeTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningValorantTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentsService.getRunningValorantTournaments();
    return reply.status(200).send(tournamentList);
  }
}
