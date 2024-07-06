import { FastifyReply, FastifyRequest } from "fastify";
import { WPGraphQLService } from "../../domain/services/wp-graphql.service";

export class WPGraphQLController {
  constructor(readonly wpGraphQLService: WPGraphQLService) {}

  public async getPostsByCategorySlug(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const params = request.params as { categorySlug: string };
    const { categorySlug } = params;
    const query = request.query as {
      after?: string | null;
      before?: string | null;
      number?: string | null;
    };
    const posts = await this.wpGraphQLService.getPostsByCategorySlug({
      ...query,
      categorySlug,
    });
    return reply.status(200).send(posts);
  }

  public async getCategoryBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const category = await this.wpGraphQLService.getCategoryBySlug({
      slug,
    });
    return reply.status(200).send(category);
  }
}
