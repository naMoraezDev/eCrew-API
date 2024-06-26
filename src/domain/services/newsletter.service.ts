import { newsletterSubscriptionSchema } from "../schemas/newsletter/newsletter.schema";
import { NewsletterRepository } from "../../infrastructure/repositories/newsletter.repository";

export interface NewsletterServiceProtocol {
  subscribe(email: string): Promise<typeof newsletterSubscriptionSchema._type>;
}

export class NewsletterService implements NewsletterServiceProtocol {
  constructor(readonly newsletterRepository: NewsletterRepository) {}

  public async subscribe(email: string) {
    return await this.newsletterRepository.subscribe(email);
  }
}
