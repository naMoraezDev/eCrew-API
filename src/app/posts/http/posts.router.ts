import z from "zod";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import postsController from "../controllers/posts.controller";
import { postListSchema, postSchema } from "../../schemas/posts.schema";

export async function postsRouter(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/posts/:categorySlug",
    {
      schema: {
        tags: ["posts"],
        summary: "Get a list of matching posts (by category slug).",
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

  app.withTypeProvider<ZodTypeProvider>().get(
    "/posts/post/:slug",
    {
      schema: {
        tags: ["posts"],
        summary: "Get a single post (by slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: postSchema,
        },
      },
    },
    async (request, reply) => {
      const post = await postsController.getPostBySlug(request);
      return reply.status(200).send(post);
    }
  );
}
