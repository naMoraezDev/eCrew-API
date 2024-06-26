import { FastifyReply, FastifyRequest } from "fastify";
import { NewsletterService } from "../../domain/services/newsletter.service";

export class NewsletterController {
  constructor(readonly newsletterService: NewsletterService) {}

  public async subscribe(request: FastifyRequest, reply: FastifyReply) {
    const body = request.body as { email: string };
    const { email } = body;
    const subscription = await this.newsletterService.subscribe(email);
    return reply.status(201).send(subscription);
  }
}
