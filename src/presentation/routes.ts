import { FastifyInstance } from "fastify";
import { tagRouter } from "./tag/tag.router";
import { postRouter } from "./post/post.router";
import { gameRouter } from "./game/game.router";
import { matchRouter } from "./match/match.router";
import { healthRouter } from "./health/health.router";
import { categoryRouter } from "./category/category.router";

export async function routes(app: FastifyInstance) {
  app.register(healthRouter);
  app.register(postRouter);
  app.register(categoryRouter);
  app.register(tagRouter);
  app.register(matchRouter);
  app.register(gameRouter);
}
