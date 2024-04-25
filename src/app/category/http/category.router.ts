import z from "zod";
import { FastifyInstance } from "fastify";
import { categorySchema } from "../../../infra/schemas/category.schema";
import { CategoryController } from "../controllers/category.controller";

export async function categoryRouter(app: FastifyInstance) {
  app.get(
    "/category/:slug",
    {
      schema: {
        tags: ["category"],
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
      const category = await new CategoryController().getCategoryBySlug(
        request
      );
      return reply.status(200).send(category);
    }
  );
}
