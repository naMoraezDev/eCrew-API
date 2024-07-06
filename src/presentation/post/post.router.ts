import z from "zod";
import { FastifyInstance } from "fastify";
import { PostService } from "../../domain/services/post.service";
import { postSchema } from "../../domain/schemas/post/post.schema";
import { postListSchema } from "../../domain/schemas/post/post-list.schema";
// import { cacheMiddleware } from "../../application/middlewares/cache.router";
import { PostController } from "../../application/controllers/post.controller";
import { PostRepository } from "../../infrastructure/repositories/post.repository";

export async function postRouter(app: FastifyInstance) {
  // app.addHook("onRequest", cacheMiddleware);

  app.get(
    "/posts/:categorySlug",
    {
      schema: {
        tags: ["wp-public"],
        summary: "Get a list of matching posts (by category slug).",
        querystring: z.object({
          page: z.string().optional(),
          number: z.string().optional(),
        }),
        params: z.object({
          categorySlug: z.string(),
        }),
        response: {
          200: postListSchema,
        },
      },
    },
    async (request, reply) => {
      await new PostController(
        new PostService(new PostRepository())
      ).getPostsByCategory(request, reply);
    }
  );

  app.get(
    "/posts/tag/:slug",
    {
      schema: {
        tags: ["wp-public"],
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
      await new PostController(
        new PostService(new PostRepository())
      ).getPostsByTag(request, reply);
    }
  );

  app.get(
    "/posts/post/:slug",
    {
      schema: {
        tags: ["wp-public"],
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
      await new PostController(
        new PostService(new PostRepository())
      ).getPostBySlug(request, reply);
    }
  );

  app.get(
    "/posts/search/:search",
    {
      schema: {
        tags: ["wp-public"],
        summary: "Get a list of matching posts (by search term).",
        params: z.object({
          search: z.string(),
        }),
        response: {
          200: postListSchema,
        },
      },
    },
    async (request, reply) => {
      await new PostController(
        new PostService(new PostRepository())
      ).getPostsBySearch(request, reply);
    }
  );
}
