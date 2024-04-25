import { z } from "zod";
import { FastifyInstance } from "fastify";
import { tagSchema } from "../../../infra/schemas/tag.schema";
import { TagsController } from "../controllers/tags.controller";
import { tagListSchema } from "../../../infra/schemas/tag-list.shema";

export async function tagsRouter(app: FastifyInstance) {
  app.get(
    "/tags",
    {
      schema: {
        tags: ["tags"],
        summary: "Get a list of tags.",
        response: {
          200: tagListSchema,
        },
      },
    },
    async (_request, reply) => {
      const tagList = await new TagsController().getTags();
      return reply.status(200).send(tagList);
    }
  );

  app.get(
    "/tags/:slug",
    {
      schema: {
        tags: ["tags"],
        summary: "Get information about a single tag (by slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: tagSchema,
        },
      },
    },
    async (request, reply) => {
      const tag = await new TagsController().getTagBySlug(request);
      return reply.status(200).send(tag);
    }
  );
}
