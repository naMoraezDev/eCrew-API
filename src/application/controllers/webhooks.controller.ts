import { FastifyReply, FastifyRequest } from "fastify";
import { WebhooksService } from "../../domain/services/webhooks.service";

export class WebhooksController {
  constructor(readonly webhooksService: WebhooksService) {}

  public async listen(request: FastifyRequest, reply: FastifyReply) {
    const secret = request.headers["stripe-signature"]?.toString() || "";
    const response = await this.webhooksService.listen(
      secret,
      (request.body as any).raw
    );
    return reply.status(201).send(response);
  }
}
