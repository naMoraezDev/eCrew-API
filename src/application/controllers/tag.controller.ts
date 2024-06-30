import { FastifyReply, FastifyRequest } from "fastify";
import { TagService } from "../../domain/services/tag.service";
import { saveDataToCache } from "../../infrastructure/utils/cache";

export class TagController {
  constructor(readonly tagService: TagService) {}

  public async getTagBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { slug: string };
    const { slug } = params;
    const tag = this.tagService.getTagBySlug(slug);
    await saveDataToCache(request, tag);
    return reply.status(200).send(tag);
  }

  public async getTags(request: FastifyRequest, reply: FastifyReply) {
    const tags = await this.tagService.getTags();
    await saveDataToCache(request, tags);
    return reply.status(200).send(tags);
  }
}
