import { FastifyReply, FastifyRequest } from "fastify";
import { CategoryService } from "../../domain/services/category.service";

export class CategoryController {
  constructor(readonly categoryService: CategoryService) {}

  public async getCategoryBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const category = await this.categoryService.getCategoryBySlug(slug);
    return reply.status(200).send(category);
  }
}
