import { FastifyReply, FastifyRequest } from "fastify";
import { PostService } from "../../domain/services/post.service";

export class PostController {
  constructor(readonly postService: PostService) {}

  public async getPostBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const post = await this.postService.getPostBySlug(slug);
    return reply.status(200).send(post);
  }

  public async getPostsByTag(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const posts = await this.postService.getPostsByTag(slug);
    return reply.status(200).send(posts);
  }

  public async getPostsByCategory(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    const posts = await this.postService.getPostsByCategory(categorySlug);
    return reply.status(200).send(posts);
  }
}
