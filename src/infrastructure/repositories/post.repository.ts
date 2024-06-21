import { Wordpress } from "../wordpress/wordpress";
import { postSchema } from "../../domain/schemas/post/post.schema";
import { postListSchema } from "../../domain/schemas/post/post-list.schema";
import { httpClientFactory } from "../adapters/factories/http-client.factory";

export interface PostRepositoryProtocol {
  getPostsByCategory(
    categorySlug: string,
    query: {
      page?: string;
      number?: string;
    }
  ): Promise<typeof postListSchema._type>;
  getPostBySlug(slug: string): Promise<typeof postSchema._type>;
  getPostsByTag(tag: string): Promise<typeof postListSchema._type>;
  getPostsBySearch(search: string): Promise<typeof postListSchema._type>;
}

export class PostRepository implements PostRepositoryProtocol {
  public async getPostsByCategory(
    categorySlug: string,
    query: {
      page?: string;
      number?: string;
    }
  ): Promise<typeof postListSchema._type> {
    return await new Wordpress(httpClientFactory()).getPostsByCategory(
      categorySlug,
      query
    );
  }

  public async getPostBySlug(slug: string): Promise<typeof postSchema._type> {
    return await new Wordpress(httpClientFactory()).getPostBySlug(slug);
  }

  public async getPostsByTag(
    tag: string
  ): Promise<typeof postListSchema._type> {
    return await new Wordpress(httpClientFactory()).getPostsByTag(tag);
  }

  public async getPostsBySearch(search: string) {
    return await new Wordpress(httpClientFactory()).getPostsBySearch(search);
  }
}
