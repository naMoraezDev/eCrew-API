import { tagSchema } from "../../domain/schemas/tag/tag.schema";
import { postSchema } from "../../domain/schemas/post/post.schema";
import { HttpClient } from "../adapters/factories/http-client.factory";
import { tagListSchema } from "../../domain/schemas/tag/tag-list.shema";
import { postListSchema } from "../../domain/schemas/post/post-list.schema";
import { categorySchema } from "../../domain/schemas/category/category.schema";

interface WordpressProtocol {
  getPostsByCategory: (
    categorySlug: string
  ) => Promise<typeof postListSchema._type>;
  getTags: () => Promise<typeof tagListSchema._type>;
  getTagBySlug: (slug: string) => Promise<typeof tagSchema._type>;
  getPostBySlug: (slug: string) => Promise<typeof postSchema._type>;
  getPostsByTag: (tag: string) => Promise<typeof postListSchema._type>;
  getCategoryBySlug: (slug: string) => Promise<typeof categorySchema._type>;
}

export class Wordpress implements WordpressProtocol {
  private readonly baseUrl: string =
    process.env.PRIVATE_WORDPRESS_API_URL ?? "";

  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async getPostsByCategory(categorySlug: string) {
    const postListData = await this.httpClient.request({
      url: `${this.baseUrl}/posts?category=${categorySlug}`,
      method: "GET",
    });
    return postListData;
  }

  public async getTags() {
    const tagListData: typeof tagListSchema._type =
      await this.httpClient.request({
        url: `${this.baseUrl}/tags`,
        method: "GET",
      });
    return tagListData;
  }

  public async getTagBySlug(slug: string) {
    const tagData: typeof tagSchema._type = await this.httpClient.request({
      url: `${this.baseUrl}/tags/slug:${slug}`,
      method: "GET",
    });
    return tagData;
  }

  public async getPostBySlug(slug: string) {
    const postData: typeof postSchema._type = await this.httpClient.request({
      url: `${this.baseUrl}/posts/slug:${slug}`,
      method: "GET",
    });
    return postData;
  }

  public async getPostsByTag(tag: string) {
    const postListData: typeof postListSchema._type =
      await this.httpClient.request({
        url: `${this.baseUrl}/posts?tag=${tag}`,
        method: "GET",
      });
    return postListData;
  }

  public async getCategoryBySlug(slug: string) {
    const categoryData: typeof categorySchema._type =
      await this.httpClient.request({
        url: `${this.baseUrl}/categories/slug:${slug}`,
        method: "GET",
      });
    return categoryData;
  }
}
