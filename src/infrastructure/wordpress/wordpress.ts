import { tagSchema } from "../../domain/schemas/tag/tag.schema";
import { postSchema } from "../../domain/schemas/post/post.schema";
import { HttpClient } from "../adapters/factories/http-client.factory";
import { tagListSchema } from "../../domain/schemas/tag/tag-list.shema";
import { postListSchema } from "../../domain/schemas/post/post-list.schema";
import { categorySchema } from "../../domain/schemas/category/category.schema";

interface WordpressProtocol {
  getPostsByCategory: (
    categorySlug: string,
    query: {
      page?: string;
      number?: string;
    }
  ) => Promise<typeof postListSchema._type>;
  getTags: () => Promise<typeof tagListSchema._type>;
  getTagBySlug: (slug: string) => Promise<typeof tagSchema._type>;
  getPostBySlug: (slug: string) => Promise<typeof postSchema._type>;
  getPostsByTag: (tag: string) => Promise<typeof postListSchema._type>;
  getCategoryBySlug: (slug: string) => Promise<typeof categorySchema._type>;
  getPostsBySearch: (search: string) => Promise<typeof postListSchema._type>;
}

export class Wordpress implements WordpressProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.PRIVATE_WORDPRESS_API_URL ?? "";

  public async getPostsByCategory(
    categorySlug: string,
    query: {
      page?: string;
      number?: string;
    }
  ) {
    const postListData = await this.httpClient.request<
      typeof postListSchema._type
    >({
      input: `${this.baseUrl}/posts?${
        categorySlug !== "all" ? `category=${categorySlug}` : ""
      }${query?.page || query?.number ? "?" : ""}${
        query?.page ? `&page=${query?.page}` : ""
      }${query?.number ? `&number=${query?.number}` : ""}`,
      init: {
        method: "GET",
      },
    });
    return postListData;
  }

  public async getTags() {
    const tagListData = await this.httpClient.request<
      typeof tagListSchema._type
    >({
      input: `${this.baseUrl}/tags`,
      init: {
        method: "GET",
      },
    });
    return tagListData;
  }

  public async getTagBySlug(slug: string) {
    const tagData = await this.httpClient.request<typeof tagSchema._type>({
      input: `${this.baseUrl}/tags/slug:${slug}`,
      init: {
        method: "GET",
      },
    });
    return tagData;
  }

  public async getPostBySlug(slug: string) {
    const postData = await this.httpClient.request<typeof postSchema._type>({
      input: `${this.baseUrl}/posts/slug:${slug}`,
      init: {
        method: "GET",
      },
    });
    return postData;
  }

  public async getPostsByTag(tag: string) {
    const postListData = await this.httpClient.request<
      typeof postListSchema._type
    >({
      input: `${this.baseUrl}/posts?tag=${tag}`,
      init: {
        method: "GET",
      },
    });
    return postListData;
  }

  public async getCategoryBySlug(slug: string) {
    const categoryData = await this.httpClient.request<
      typeof categorySchema._type
    >({
      input: `${this.baseUrl}/categories/slug:${slug}`,
      init: {
        method: "GET",
      },
    });
    return categoryData;
  }

  public async getPostsBySearch(search: string) {
    const postListData = await this.httpClient.request<
      typeof postListSchema._type
    >({
      input: `${this.baseUrl}/posts?search=${search}`,
      init: {
        method: "GET",
      },
    });
    return postListData;
  }
}
