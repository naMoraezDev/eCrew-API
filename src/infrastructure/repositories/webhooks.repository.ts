import Stripe from "stripe";
import { stripe } from "../stripe/stripe";
import { preferencesModel } from "../db/models/preferences.model";
import { BadRequestError } from "../errors/error-instances/bad-request";

export interface WebhooksRepositoryProtocol {
  listen(secret: string, buffer: Buffer): Promise<{ received: boolean }>;
}

export class WebhooksRepository implements WebhooksRepositoryProtocol {
  public async listen(
    secret: string,
    buffer: Buffer
  ): Promise<{ received: boolean }> {
    let event: Stripe.Event;
    const relevantEvents = new Set([
      "checkout.session.completed",
      "customer.subscription.deleted",
    ]);
    try {
      event = stripe.webhooks.constructEvent(
        buffer,
        secret,
        process.env.PRIVATE_STRIPE_WEBHOOK_SECRET || ""
      );
    } catch (error: any) {
      throw new BadRequestError(`Webhook Error: ${error.message}`);
    }
    const type = event.type;
    if (relevantEvents.has(type)) {
      switch (type) {
        case "checkout.session.completed":
          if (event.data.object.payment_status !== "paid") {
            break;
          }
          await preferencesModel
            .updateOne(
              {
                stripe_customer_id: event.data.object.customer,
              },
              {
                subscription: true,
              }
            )
            .exec();
          break;
        case "customer.subscription.deleted":
          await preferencesModel.updateOne(
            {
              stripe_customer_id: event.data.object.customer,
            },
            {
              subscription: false,
            }
          );
        default:
          break;
      }
    }
    return { received: true };
  }
}
