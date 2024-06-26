import { CheckoutRepository } from "../../infrastructure/repositories/checkout.repository";
import { checkoutSchema } from "../schemas/checkout/checkout.schema";

export interface CheckoutServiceProtocol {
  checkout(uid: string, email: string): Promise<typeof checkoutSchema._type>;
}

export class CheckoutService implements CheckoutServiceProtocol {
  constructor(readonly checkoutRepository: CheckoutRepository) {}

  public async checkout(uid: string, email: string) {
    return await this.checkoutRepository.checkout(uid, email);
  }
}
