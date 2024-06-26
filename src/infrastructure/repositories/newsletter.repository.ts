import { ConflictError } from "../errors/error-instances/conflict";
import { NewsletterServiceProtocol } from "../../domain/services/newsletter.service";
import { newsletterSubscriptionModel } from "../db/models/newsletter-subscription.model";
import { newsletterSubscriptionSchema } from "../../domain/schemas/newsletter/newsletter.schema";

export class NewsletterRepository implements NewsletterServiceProtocol {
  public async subscribe(
    email: string
  ): Promise<typeof newsletterSubscriptionSchema._type> {
    const subscription = await newsletterSubscriptionModel
      .findOne({ email })
      .exec();
    if (subscription) {
      throw new ConflictError("Email already subscribed.");
    }
    const newSubscription = await newsletterSubscriptionModel.create({
      email,
      subscribed: true,
    });
    return newSubscription;
  }
}
