import { WebhooksRepository } from "../../infrastructure/repositories/webhooks.repository";

export interface WebhooksServiceProtocol {
  listen(secret: string, buffer: Buffer): Promise<{ received: boolean }>;
}

export class WebhooksService implements WebhooksServiceProtocol {
  constructor(readonly webhooksRepository: WebhooksRepository) {}

  public async listen(secret: string, buffer: Buffer) {
    return await this.webhooksRepository.listen(secret, buffer);
  }
}
