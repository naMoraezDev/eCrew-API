import { TagsEntity } from "../entities/tags.entity";

export class TagsController {
  public async getTags() {
    return await new TagsEntity().getTags();
  }
}
