import { FastifyInstance } from "fastify";
import { GameService } from "../../domain/services/game.service";
import { gameListSchema } from "../../domain/schemas/games/game-list.schema";
// import { cacheMiddleware } from "../../application/middlewares/cache.router";
import { GameController } from "../../application/controllers/game.controller";
import { GameRepository } from "../../infrastructure/repositories/game.repository";

export async function gameRouter(app: FastifyInstance) {
  // app.addHook("onRequest", cacheMiddleware);

  app.get(
    "/games",
    {
      schema: {
        tags: ["games"],
        summary: "Get a list of the covered games.",
        response: {
          200: gameListSchema,
        },
      },
    },
    async (request, reply) => {
      await new GameController(
        new GameService(new GameRepository())
      ).getGameList(request, reply);
    }
  );
}
