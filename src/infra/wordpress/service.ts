import { fetchApi } from "../../app/utils/fetch-api";
import { postListSchema, postSchema } from "../../app/schemas/posts.schema";

class WordpressService {
  public async getPostsByCategory(categorySlug: string) {
    const postListData = await fetchApi<typeof postListSchema._type>(
      `/posts?category=${categorySlug}`
    );
    return postListData;
  }

  public async getPostBySlug(slug: string) {
    const postData = await fetchApi<typeof postSchema._type>(
      `/posts/slug:${slug}`
    );
    return postData;
  }
}

export default new WordpressService();
