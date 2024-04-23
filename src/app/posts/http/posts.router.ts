import z from "zod";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import postsController from "../controllers/posts.controller";
import { postListSchema } from "../../schemas/posts.schema";

export async function postsRouter(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/posts/:categorySlug",
    {
      schema: {
        tags: ["posts"],
        summary: "Get posts by category",
        description: "Get a post list by a category slug or name",

        params: z.object({
          categorySlug: z.string(),
        }),
        response: {
          200: postListSchema,
        },
      },
    },
    async (request, reply) => {
      const posts = await postsController.getPostsByCategory(request);
      return reply.status(200).send(posts);
    }
  );
}
