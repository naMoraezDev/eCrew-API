import { FastifyInstance } from "fastify";
import { healthCheck } from "./utils/helth-check";
import { tagsRouter } from "../../app/tags/http/tags.router";
import { postsRouter } from "../../app/posts/http/posts.router";
import { categoryRouter } from "../../app/category/http/category.router";

export async function routes(app: FastifyInstance) {
  app.register(healthCheck);
  app.register(tagsRouter);
  app.register(postsRouter);
  app.register(categoryRouter);
}
