import { CheckoutRepository } from "../../infrastructure/repositories/checkout.repository";
import { checkoutSchema } from "../schemas/checkout/checkout.schema";

export interface CheckoutServiceProtocol {
  checkout(email: string): Promise<typeof checkoutSchema._type>;
}

export class CheckoutService implements CheckoutServiceProtocol {
  constructor(readonly checkoutRepository: CheckoutRepository) {}

  public async checkout(email: string) {
    return await this.checkoutRepository.checkout(email);
  }
}
