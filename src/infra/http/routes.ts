import { FastifyInstance } from "fastify";
import { postsRouter } from "../../app/posts/http/posts.router";

export default function (app: FastifyInstance, _opts: any, done: any) {
  app.register(postsRouter);
  done();
}
