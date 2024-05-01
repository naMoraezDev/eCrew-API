import { WordpressService } from "../../../infra/wordpress/wordpress.service";

export class CategoryEntity {
  private slug: string;

  constructor(slug: string | null) {
    this.slug = slug || "";
  }

  public async getCategoryBySlug() {
    const category = await new WordpressService().getCategoryBySlug(this.slug);
    return category;
  }
}
