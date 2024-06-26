import z from "zod";
import { FastifyInstance } from "fastify";
import { CheckoutService } from "../../domain/services/checkout.service";
import { checkoutSchema } from "../../domain/schemas/checkout/checkout.schema";
import { CheckoutController } from "../../application/controllers/checkout.controller";
import { CheckoutRepository } from "../../infrastructure/repositories/checkout.repository";

export async function checkoutRouter(app: FastifyInstance) {
  app.post(
    "/checkout",
    {
      schema: {
        tags: ["checkout"],
        summary: "Generates a session id for checkout on Stripe.",
        headers: z.object({
          authorization: z.string(),
        }),
        response: {
          200: checkoutSchema,
        },
      },
    },
    async (request, reply) => {
      await new CheckoutController(
        new CheckoutService(new CheckoutRepository())
      ).checkout(request, reply);
    }
  );
}
