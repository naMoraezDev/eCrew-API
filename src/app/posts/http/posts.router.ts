import z from "zod";
import { FastifyInstance } from "fastify";
import { postSchema } from "../../../infra/schemas/post.schema";
import { PostsController } from "../controllers/posts.controller";
import { postListSchema } from "../../../infra/schemas/post-list.schema";

export async function postsRouter(app: FastifyInstance) {
  app.get(
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
      const posts = await new PostsController().getPostsByCategory(request);
      return reply.status(200).send(posts);
    }
  );

  app.get(
    "/posts/tag/:slug",
    {
      schema: {
        tags: ["posts"],
        summary: "Get a list of matching posts (by tag slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: postListSchema,
        },
      },
    },
    async (request, reply) => {
      const posts = await new PostsController().getPostsByTag(request);
      return reply.status(200).send(posts);
    }
  );

  app.get(
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
      const post = await new PostsController().getPostBySlug(request);
      return reply.status(200).send(post);
    }
  );
}
