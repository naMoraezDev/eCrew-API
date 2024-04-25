import { FastifyRequest } from "fastify";
import { TagsEntity } from "../entities/tags.entity";

export class TagsController {
  public async getTags() {
    return await new TagsEntity(null).getTags();
  }

  public async getTagBySlug(request: FastifyRequest) {
    const params = request.params as { slug: string };
    const { slug } = params;
    return await new TagsEntity(slug).getTagBySlug();
  }
}
