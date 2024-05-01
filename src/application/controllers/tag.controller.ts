import { FastifyReply, FastifyRequest } from "fastify";
import { TagService } from "../../domain/services/tag.service";

export class TagController {
  constructor(readonly tagService: TagService) {}

  public async getTagBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const tag = this.tagService.getTagBySlug(slug);
    return reply.status(200).send(tag);
  }

  public async getTags(_request: FastifyRequest, reply: FastifyReply) {
    const tags = await this.tagService.getTags();
    return reply.status(200).send(tags);
  }
}
