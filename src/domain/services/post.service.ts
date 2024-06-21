import { postSchema } from "../schemas/post/post.schema";
import { postListSchema } from "../schemas/post/post-list.schema";
import { PostRepository } from "../../infrastructure/repositories/post.repository";

export interface PostServiceProtocol {
  getPostsByCategory(
    categorySlug: string
  ): Promise<typeof postListSchema._type>;
  getPostBySlug(slug: string): Promise<typeof postSchema._type>;
  getPostsByTag(tag: string): Promise<typeof postListSchema._type>;
  getPostsBySearch(search: string): Promise<typeof postListSchema._type>;
}

export class PostService implements PostServiceProtocol {
  constructor(readonly postRepository: PostRepository) {}

  public async getPostBySlug(slug: string) {
    return await this.postRepository.getPostBySlug(slug);
  }

  public async getPostsByTag(tag: string) {
    return await this.postRepository.getPostsByTag(tag);
  }

  public async getPostsByCategory(categorySlug: string) {
    return await this.postRepository.getPostsByCategory(categorySlug);
  }

  public async getPostsBySearch(search: string) {
    return await this.postRepository.getPostsBySearch(search);
  }
}
