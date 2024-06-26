import z from "zod";
import { FastifyInstance } from "fastify";
import { NewsletterService } from "../../domain/services/newsletter.service";
import { NewsletterController } from "../../application/controllers/newsletter.controller";
import { NewsletterRepository } from "../../infrastructure/repositories/newsletter.repository";
import { newsletterSubscriptionSchema } from "../../domain/schemas/newsletter/newsletter.schema";

export async function newsletterRouter(app: FastifyInstance) {
  app.post(
    "/subscription/newsletter",
    {
      schema: {
        tags: ["newsletter"],
        summary: "Subscribes a email to the newsletter.",
        body: z.object({
          email: z.string(),
        }),
        response: {
          201: newsletterSubscriptionSchema,
        },
      },
    },
    async (request, reply) => {
      await new NewsletterController(
        new NewsletterService(new NewsletterRepository())
      ).subscribe(request, reply);
    }
  );
}
