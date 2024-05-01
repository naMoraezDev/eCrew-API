import { Wordpress } from "../wordpress/wordpress";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { categorySchema } from "../../domain/schemas/category/category.schema";

export interface CategoryRepositoryProtocol {
  getCategoryBySlug(slug: string): Promise<typeof categorySchema._type>;
}

export class CategoryRepository implements CategoryRepositoryProtocol {
  public async getCategoryBySlug(
    slug: string
  ): Promise<typeof categorySchema._type> {
    return await new Wordpress(httpClientFactory()).getCategoryBySlug(slug);
  }
}
