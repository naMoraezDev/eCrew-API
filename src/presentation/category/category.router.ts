import z from "zod";
import { FastifyInstance } from "fastify";
import { CategoryService } from "../../domain/services/category.service";
import { categorySchema } from "../../domain/schemas/category/category.schema";
import { CategoryController } from "../../application/controllers/category.controller";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";

export async function categoryRouter(app: FastifyInstance) {
  app.get(
    "/category/:slug",
    {
      schema: {
        tags: ["categories"],
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
      await new CategoryController(
        new CategoryService(new CategoryRepository())
      ).getCategoryBySlug(request, reply);
    }
  );
}
