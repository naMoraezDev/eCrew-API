import { FastifyInstance } from "fastify";
import postsController from "../controllers/posts.controller";

export async function postsRouter(app: FastifyInstance) {
  app.get("/posts/:categorySlug", async (request, reply) => {
    const posts = await postsController.getPostsByCategory(request);
    return reply.status(200).send(posts);
  });
}
