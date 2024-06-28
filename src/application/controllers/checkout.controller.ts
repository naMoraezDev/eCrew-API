import { FastifyReply, FastifyRequest } from "fastify";
import { CheckoutService } from "../../domain/services/checkout.service";
import { firebaseAdmin } from "../../infrastructure/firebase/firebase-admin";

export class CheckoutController {
  constructor(readonly checkoutService: CheckoutService) {}

  public async checkout(request: FastifyRequest, reply: FastifyReply) {
    const headers = request.headers as { authorization: string };
    const { authorization } = headers;
    const decodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(authorization)
      .catch(() => null);
    const uid = decodedIdToken?.uid || "";
    const email = decodedIdToken?.email || "";
    const sessionUrl = await this.checkoutService.checkout(uid, email);
    return reply.status(201).send(sessionUrl);
  }
}
