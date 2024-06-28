import z from "zod";
import { FastifyInstance } from "fastify";
import { WebhooksService } from "../../domain/services/webhooks.service";
import { WebhooksController } from "../../application/controllers/webhooks.controller";
import { WebhooksRepository } from "../../infrastructure/repositories/webhooks.repository";

export async function webhooksRouter(app: FastifyInstance) {
  app.addContentTypeParser(
    "application/json",
    { parseAs: "buffer" },
    function (_req, body, done) {
      try {
        var newBody = {
          raw: body,
        };
        done(null, newBody);
      } catch (error: any) {
        error.statusCode = 400;
        done(error, undefined);
      }
    }
  );

  app.post(
    "/webhooks",
    {
      schema: {
        tags: ["webhooks"],
        summary: "Receives webhooks data.",
        response: {
          200: z.object({
            received: z.boolean(),
          }),
        },
      },
    },
    async (request, reply) => {
      await new WebhooksController(
        new WebhooksService(new WebhooksRepository())
      ).listen(request, reply);
    }
  );
}
