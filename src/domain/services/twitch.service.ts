import { twitchUserSchema } from "../schemas/twitch/user.schema";
import { TwitchRepository } from "../../infrastructure/repositories/twitch.repository";

export interface TwitchServiceProtocol {
  getTwitchUser: (login: string) => Promise<typeof twitchUserSchema._type>;
}

export class TwitchService implements TwitchServiceProtocol {
  constructor(readonly twitchRepository: TwitchRepository) {}
  public async getTwitchUser(
    login: string
  ): Promise<typeof twitchUserSchema._type> {
    return await this.twitchRepository.getTwitchUser(login);
  }
}
