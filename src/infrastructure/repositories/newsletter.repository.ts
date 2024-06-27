import { smtp } from "../nodemailer/nodemailer";
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
    const emailConfig = {
      to: email,
      from: "@ePosts - Newsletter",
      subject: "Newsletter ePosts - Obrigado por se inscrever!",
      html: "<p>Obrigado por se inscrever no nosso newsletter!</p>",
    };
    await smtp.sendMail(emailConfig).catch((err) => console.log(err));
    return newSubscription;
  }
}
