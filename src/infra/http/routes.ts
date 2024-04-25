import { FastifyInstance } from "fastify";
import { tagsRouter } from "../../app/tags/http/tags.router";
import { postsRouter } from "../../app/posts/http/posts.router";
import { categoryRouter } from "../../app/category/http/category.router";

export default function (app: FastifyInstance, _opts: any, done: any) {
  app.register(tagsRouter);
  app.register(postsRouter);
  app.register(categoryRouter);
  done();
}
