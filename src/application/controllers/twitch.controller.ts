import { FastifyReply, FastifyRequest } from "fastify";
import { TwitchService } from "../../domain/services/twitch.service";

export class TwitchController {
  constructor(readonly twitchService: TwitchService) {}

  public async getTwitchUser(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { login: string };
    const { login } = params;
    const user = await this.twitchService.getTwitchUser(login);
    return reply.status(200).send(user);
  }
}
