import { FastifyReply, FastifyRequest } from "fastify";
import { GameService } from "../../domain/services/game.service";

export class GameController {
  constructor(readonly gameService: GameService) {}

  public async getGameList(_request: FastifyRequest, reply: FastifyReply) {
    const gameList = await this.gameService.getGameList();
    return reply.status(200).send(gameList);
  }
}
