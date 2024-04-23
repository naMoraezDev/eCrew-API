import { FastifyRequest } from "fastify";
import PostsEntity from "../entities/posts.entity";

class PostsController extends PostsEntity {
  getPostsByCategory(request: FastifyRequest) {
    const params = request.params as any;
    const { categorySlug } = params;
    return new PostsEntity(categorySlug).getByCategory();
  }
}

export default new PostsController();
