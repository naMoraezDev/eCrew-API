import { categorySchema } from "../schemas/category/category.schema";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";

export interface CategoryServiceProtocol {
  getCategoryBySlug(slug: string): Promise<typeof categorySchema._type>;
}

export class CategoryService implements CategoryServiceProtocol {
  constructor(readonly categoryRepository: CategoryRepository) {}

  public async getCategoryBySlug(slug: string) {
    return await this.categoryRepository.getCategoryBySlug(slug);
  }
}
