import { tagRouter } from "./tag.router";
import { FastifyInstance } from "fastify";
import { postRouter } from "./post.router";
import { healthCheck } from "./helth-check.router";
import { categoryRouter } from "./category.router";

export async function routes(app: FastifyInstance) {
  app.register(healthCheck);
  app.register(postRouter);
  app.register(categoryRouter);
  app.register(tagRouter);
}
