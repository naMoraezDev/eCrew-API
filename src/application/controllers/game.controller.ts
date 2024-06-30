import { FastifyReply, FastifyRequest } from "fastify";
import { GameService } from "../../domain/services/game.service";
import { saveDataToCache } from "../../infrastructure/utils/cache";

export class GameController {
  constructor(readonly gameService: GameService) {}

  public async getGameList(request: FastifyRequest, reply: FastifyReply) {
    const gameList = await this.gameService.getGameList();
    await saveDataToCache(request, gameList);
    return reply.status(200).send(gameList);
  }
}
