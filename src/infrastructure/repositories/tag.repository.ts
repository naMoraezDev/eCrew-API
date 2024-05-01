import { Wordpress } from "../wordpress/wordpress";
import { tagSchema } from "../../domain/schemas/tag/tag.schema";
import { tagListSchema } from "../../domain/schemas/tag/tag-list.shema";
import { httpClientFactory } from "../adapters/factories/http-client.factory";

export interface TagRepositoryProtocol {
  getTags(): Promise<any>;
  getTagBySlug(slug: string): Promise<typeof tagSchema._type>;
}

export class TagRepository implements TagRepositoryProtocol {
  public async getTags(): Promise<typeof tagListSchema._type> {
    const tagsData: typeof tagListSchema._type = await new Wordpress(
      httpClientFactory()
    ).getTags();
    return tagsData;
  }

  public async getTagBySlug(slug: string): Promise<typeof tagSchema._type> {
    const tagData: typeof tagSchema._type = await new Wordpress(
      httpClientFactory()
    ).getTagBySlug(slug);
    return tagData;
  }
}
