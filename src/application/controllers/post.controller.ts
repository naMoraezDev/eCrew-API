import { FastifyReply, FastifyRequest } from "fastify";
import { PostService } from "../../domain/services/post.service";
import { saveDataToCache } from "../../infrastructure/utils/cache";
import { PostsFormatFactory } from "../../infrastructure/utils/posts-format-factory";
import { NotFoundError } from "../../infrastructure/errors/error-instances/not-found";

export class PostController {
  constructor(readonly postService: PostService) {}

  public async getPostBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const postData = await this.postService.getPostBySlug(slug);
    if (!postData.ID) {
      throw new NotFoundError("Post not found.");
    }
    const post = new PostsFormatFactory().formatPostData(postData);
    await saveDataToCache(request, post);
    return reply.status(200).send(post);
  }

  public async getPostsByTag(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const postListData = await this.postService.getPostsByTag(slug);
    const posts = new PostsFormatFactory().formatPostListData(postListData);
    await saveDataToCache(request, posts);
    return reply.status(200).send(posts);
  }

  public async getPostsByCategory(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    const query = request.query as {
      page?: string;
      number?: string;
    };
    const postListData = await this.postService.getPostsByCategory(
      categorySlug,
      query
    );
    const posts = new PostsFormatFactory().formatPostListData(postListData);
    await saveDataToCache(request, posts);
    return reply.status(200).send(posts);
  }

  public async getPostsBySearch(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { search: string };
    const { search } = params;
    const postListData = await this.postService.getPostsBySearch(search);
    const posts = new PostsFormatFactory().formatPostListData(postListData);
    await saveDataToCache(request, posts);
    return reply.status(200).send(posts);
  }
}
