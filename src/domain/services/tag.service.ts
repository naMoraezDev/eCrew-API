import { tagSchema } from "../schemas/tag/tag.schema";
import { tagListSchema } from "../schemas/tag/tag-list.shema";
import { TagRepository } from "../../infrastructure/repositories/tag.repository";

export interface TagServiceProtocol {
  getTags(): Promise<typeof tagListSchema._type>;
  getTagBySlug(slug: string): Promise<typeof tagSchema._type>;
}

export class TagService implements TagServiceProtocol {
  constructor(readonly tagRepository: TagRepository) {}

  public async getTags(): Promise<typeof tagListSchema._type> {
    return await this.tagRepository.getTags();
  }

  public async getTagBySlug(slug: string): Promise<typeof tagSchema._type> {
    return await this.tagRepository.getTagBySlug(slug);
  }
}
