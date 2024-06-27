import { stripe } from "../stripe/stripe";
import { preferencesModel } from "../db/models/preferences.model";
import { checkoutSchema } from "../../domain/schemas/checkout/checkout.schema";

export interface CheckoutRepositoryProtocol {
  checkout(uid: string, email: string): Promise<typeof checkoutSchema._type>;
}

export class CheckoutRepository implements CheckoutRepositoryProtocol {
  public async checkout(
    uid: string,
    email: string
  ): Promise<typeof checkoutSchema._type> {
    let preferences = await preferencesModel.findOne({ uid }).exec();
    if (!preferences) {
      preferences = await preferencesModel.create({
        uid,
      });
    }
    let customer;
    if (!preferences.stripe_customer_id) {
      customer = await stripe.customers.create({
        email,
      });
      await preferencesModel
        .updateOne({ uid }, { stripe_customer_id: customer.id })
        .exec();
    } else {
      customer = {
        id: preferences.stripe_customer_id,
      };
    }
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "brl",
            unit_amount: 1390,
            recurring: {
              interval: "month",
            },
            product: "prod_QMOpdvrjVULFL4",
          },
        },
      ],
      billing_address_collection: "required",
      mode: "subscription",
      allow_promotion_codes: true,
      cancel_url: process.env.PRIVATE_STRIPE_CANCEL_URL,
      success_url: process.env.PRIVATE_STRIPE_SUCCESS_URL,
    });
    return { sessionId: checkoutSession.id };
  }
}
