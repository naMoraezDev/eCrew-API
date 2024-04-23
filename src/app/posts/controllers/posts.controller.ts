import { FastifyRequest } from "fastify";
import PostsEntity from "../entities/posts.entity";

class PostsController {
  getPostsByCategory(request: FastifyRequest) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    return new PostsEntity(categorySlug).get();
  }
}

export default new PostsController();
