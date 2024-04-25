import { FastifyInstance } from "fastify";
import { postsRouter } from "../../app/posts/http/posts.router";
import { categoryRouter } from "../../app/category/http/category.router";

export default function (app: FastifyInstance, _opts: any, done: any) {
  app.register(postsRouter);
  app.register(categoryRouter);
  done();
}
