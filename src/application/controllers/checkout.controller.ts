import { FastifyReply, FastifyRequest } from "fastify";
import { CheckoutService } from "../../domain/services/checkout.service";
import { firebaseAdmin } from "../../infrastructure/firebase/firebase-admin";

export class CheckoutController {
  constructor(readonly checkoutService: CheckoutService) {}

  public async checkout(request: FastifyRequest, reply: FastifyReply) {
    const headers = request.headers as { authorization: string };
    const { authorization } = headers;
    if (!authorization) {
      reply.status(401).send("Unauthorized!");
      return;
    }
    const decodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(authorization)
      .catch(() => null);
    if (!decodedIdToken) {
      reply.status(401).send("Unauthorized!");
      return;
    }
    const email = decodedIdToken.email || "";
    const sessionId = await this.checkoutService.checkout(email);
    return reply.status(200).send(sessionId);
  }
}
