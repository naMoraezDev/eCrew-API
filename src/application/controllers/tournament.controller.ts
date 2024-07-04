import { FastifyReply, FastifyRequest } from "fastify";
import { TournamentService } from "../../domain/services/tournament.service";

export class TournamentController {
  constructor(readonly tournamentService: TournamentService) {}

  public async getRunningCodMWTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningCodMWTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningLoLTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningLoLTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningCsGoTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningCsGoTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningDota2Tournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningDota2Tournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningR6SiegeTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningR6SiegeTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getRunningValorantTournaments(
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const tournamentList =
      await this.tournamentService.getRunningValorantTournaments();
    return reply.status(200).send(tournamentList);
  }

  public async getTournamentBySlug(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const tournament = await this.tournamentService.getTournamentBySlug(slug);
    return reply.status(200).send(tournament);
  }
}
