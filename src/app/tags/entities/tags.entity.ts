import { WordpressService } from "../../../infra/wordpress/service";

export class TagsEntity {
  private slug: string;

  constructor(slug: string | null) {
    this.slug = slug ?? "";
  }

  public async getTags() {
    const tagList = await new WordpressService().getTags();
    return tagList;
  }

  public async getTagBySlug() {
    const tag = await new WordpressService().getTagBySlug(this.slug);
    return tag;
  }
}
