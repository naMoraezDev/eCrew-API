import z from "zod";
import { FastifyInstance } from "fastify";
import { WPGraphQLService } from "../../domain/services/wp-graphql.service";
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
      },
    },
    async (request, reply) => {
      await new WPGraphQLController(
        new WPGraphQLService(new WPGraphQLRepository())
      ).getPostsByCategorySlug(request, reply);
    }
  );
}
