import { FastifyRequest } from "fastify";
import { CategoryEntity } from "../entities/category.entity";

export class CategoryController {
  public async getCategoryBySlug(request: FastifyRequest) {
    const params = request.params as { slug: string };
    const { slug } = params;
    return await new CategoryEntity(slug).getCategoryBySlug();
  }
}
