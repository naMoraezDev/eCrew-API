import { WordpressService } from "../../../infra/wordpress/service";

export class TagsEntity {
  public async getTags() {
    const tagList = await new WordpressService().getTags();
    return tagList;
  }
}
