import { stripe } from "../stripe/stripe";
import { checkoutSchema } from "../../domain/schemas/checkout/checkout.schema";
import { userPreferencesModel } from "../db/mongoDB/models/user-preferences.model";

export interface CheckoutRepositoryProtocol {
  checkout(uid: string, email: string): Promise<typeof checkoutSchema._type>;
}

export class CheckoutRepository implements CheckoutRepositoryProtocol {
  public async checkout(
    uid: string,
    email: string
  ): Promise<typeof checkoutSchema._type> {
    let preferences = await userPreferencesModel.findOne({ uid }).exec();
    if (!preferences) {
      preferences = await userPreferencesModel.create({
        uid,
      });
    }
    let customer;
    if (!preferences.stripe_customer_id) {
      customer = await stripe.customers.create({
        email,
      });
      await userPreferencesModel
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
      cancel_url: process.env.STRIPE_CANCEL_URL,
      success_url: process.env.STRIPE_SUCCESS_URL,
    });
    return { sessionUrl: checkoutSession.url };
  }
}
