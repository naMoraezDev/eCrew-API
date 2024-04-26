import { FastifyRequest } from "fastify";
import { PostsEntity } from "../entities/posts.entity";

export class PostsController {
  public async getPostsByCategory(request: FastifyRequest) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    return await new PostsEntity(categorySlug, null).getPostsByCategory();
  }

  public async getPostsByTag(request: FastifyRequest) {
    const params = request.params as { slug: string };
    const { slug } = params;
    return await new PostsEntity(null, slug).getPostsByTag();
  }

  public async getPostBySlug(request: FastifyRequest) {
    const params = request.params as { slug: string };
    const { slug } = params;
    return await new PostsEntity(null, slug).getPostBySlug();
  }
}
