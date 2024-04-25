import { FastifyInstance } from "fastify";
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
}
