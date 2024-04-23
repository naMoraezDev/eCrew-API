import { fetchApi } from "../../app/utils/fetch-api";
import { postListSchema } from "../../app/schemas/post-list.schema";

class WordpressService {
  public async getPostsByCategory(categorySlug: string) {
    const test = await fetchApi<typeof postListSchema._type>(
      `/posts?category=${categorySlug}`
    );
    return test;
  }
}

export default new WordpressService();
