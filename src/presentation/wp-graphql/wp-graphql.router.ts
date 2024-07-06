import z from "zod";
import { FastifyInstance } from "fastify";
import { postSchema } from "../../domain/schemas/wp-graphql/post.schema";
import { WPGraphQLService } from "../../domain/services/wp-graphql.service";
import { tagListSchema } from "../../domain/schemas/wp-graphql/tag-list.schema";
import { categorySchema } from "../../domain/schemas/wp-graphql/category.schema";
import { postListSchema } from "../../domain/schemas/wp-graphql/post-list.schema";
import { WPGraphQLController } from "../../application/controllers/wp-graphql.controller";
import { WPGraphQLRepository } from "../../infrastructure/repositories/wp-graphql.repository";

export async function wPGraphQLRouter(app: FastifyInstance) {
  app.get(
    "/graphql/posts/category/:categorySlug",
    {
      schema: {
        tags: ["graphql"],
        summary: "Get a list of matching posts (by category slug).",
        querystring: z.object({
          after: z.string().optional(),
          number: z.string().optional(),
          before: z.string().optional(),
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
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getPostsByCategorySlug(request, reply);
    }
  );

  app.get(
    "/graphql/categories/category/:slug",
    {
      schema: {
        tags: ["graphql"],
        summary: "Get information about a single category (by slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: categorySchema,
        },
      },
    },
    async (request, reply) => {
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getCategoryBySlug(request, reply);
    }
  );

  app.get(
    "/graphql/posts/post/:slug",
    {
      schema: {
        tags: ["graphql"],
        summary: "Get information about a single post (by slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: postSchema,
        },
      },
    },
    async (request, reply) => {
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getPostBySlug(request, reply);
    }
  );

  app.get(
    "/graphql/posts",
    {
      schema: {
        tags: ["graphql"],
        summary: "Get a list of matching posts (by search term).",
        querystring: z.object({
          term: z.string(),
          after: z.string().optional(),
          number: z.string().optional(),
          before: z.string().optional(),
        }),
        response: {
          200: postListSchema,
        },
      },
    },
    async (request, reply) => {
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getPostsBySearchTerm(request, reply);
    }
  );

  app.get(
    "/graphql/tags",
    {
      schema: {
        tags: ["graphql"],
        summary: "Get a list of tags.",
        response: {
          200: tagListSchema,
        },
      },
    },
    async (request, reply) => {
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getTags(request, reply);
    }
  );
}
