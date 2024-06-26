import { stripe } from "../stripe/stripe";
import { checkoutSchema } from "../../domain/schemas/checkout/checkout.schema";

export interface CheckoutRepositoryProtocol {
  checkout(email: string): Promise<typeof checkoutSchema._type>;
}

export class CheckoutRepository implements CheckoutRepositoryProtocol {
  public async checkout(email: string): Promise<typeof checkoutSchema._type> {
    const customer = await stripe.customers.create({
      email,
    });
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price: "prod_QMOpdvrjVULFL4",
        },
      ],
      billing_address_collection: "auto",
      mode: "subscription",
      allow_promotion_codes: true,
      cancel_url: `http://localhost:3000/noticias`,
      success_url: `http://localhost:3000/noticias`,
    });
    return { sessionId: checkoutSession.id };
  }
}
