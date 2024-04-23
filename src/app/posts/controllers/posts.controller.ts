import { FastifyRequest } from "fastify";
import PostsEntity from "../entities/posts.entity";

class PostsController {
  getPostsByCategory(request: FastifyRequest) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    return new PostsEntity(categorySlug, null).getPostsByCategory();
  }

  getPostBySlug(request: FastifyRequest) {
    const params = request.params as { slug: string };
    const { slug } = params;
    return new PostsEntity(null, slug).getPostBySlug();
  }
}

export default new PostsController();
