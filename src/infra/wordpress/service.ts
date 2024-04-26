import { fetchApi } from "../utils/fetch-api";
import { tagSchema } from "../schemas/tag.schema";
import { postSchema } from "../schemas/post.schema";
import { tagListSchema } from "../schemas/tag-list.shema";
import { categorySchema } from "../schemas/category.schema";
import { postListSchema } from "../schemas/post-list.schema";

export class WordpressService {
  public async getPostsByCategory(categorySlug: string) {
    const postListData = await fetchApi<typeof postListSchema._type>(
      `/posts?category=${categorySlug}`
    );
    return postListData;
  }

  public async getPostsByTag(tag: string) {
    const postListData = await fetchApi<typeof postListSchema._type>(
      `/posts?tag=${tag}`
    );
    return postListData;
  }

  public async getPostBySlug(slug: string) {
    const postData = await fetchApi<typeof postSchema._type>(
      `/posts/slug:${slug}`
    );
    return postData;
  }

  public async getCategoryBySlug(slug: string) {
    const categoriesData = await fetchApi<typeof categorySchema._type>(
      `/categories/slug:${slug}`
    );
    return categoriesData;
  }

  public async getTags() {
    const tagsData = await fetchApi<typeof tagListSchema._type>("/tags");
    return tagsData;
  }

  public async getTagBySlug(slug: string) {
    const tagData = await fetchApi<typeof tagSchema._type>(
      `/tags/slug:${slug}`
    );
    return tagData;
  }
}
