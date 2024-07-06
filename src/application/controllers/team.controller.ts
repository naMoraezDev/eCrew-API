import { FastifyReply, FastifyRequest } from "fastify";
import { TeamService } from "../../domain/services/team.service";

export class TeamController {
  constructor(readonly teamService: TeamService) {}

  public async getCodMWTeams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getCodTeams(query);
    return reply.status(200).send(teamList);
  }

  public async getLoLTeams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getLoLTeams(query);
    return reply.status(200).send(teamList);
  }

  public async getCsGoTeams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getCsGoTeams(query);
    return reply.status(200).send(teamList);
  }

  public async getDota2Teams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getDota2Teams(query);
    return reply.status(200).send(teamList);
  }

  public async getR6SiegeTeams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getR6Teams(query);
    return reply.status(200).send(teamList);
  }

  public async getValorantTeams(request: FastifyRequest, reply: FastifyReply) {
    const query = request.query as { page?: string; per_page?: string };
    const teamList = await this.teamService.getValorantTeams(query);
    return reply.status(200).send(teamList);
  }
}
