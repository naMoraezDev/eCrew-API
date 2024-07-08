import { twitchUserSchema } from "../../domain/schemas/twitch/user.schema";
import { TwitchServiceProtocol } from "../../domain/services/twitch.service";
import { twitchTokenSchema } from "../../domain/schemas/twitch/token.schema";

export class TwitchRepository implements TwitchServiceProtocol {
  public async getTwitchUser(login: string) {
    const authorizationResponse = await fetch(
      "https://id.twitch.tv/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
        }),
      }
    );
    const authorization: typeof twitchTokenSchema._type =
      await authorizationResponse.json();
    const { access_token } = authorization;
    const userResponse = await fetch(
      `https://api.twitch.tv/helix/users?login=${login}`,
      {
        headers: {
          "Client-Id": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${access_token}`,
        } as any,
      }
    );
    const user: typeof twitchUserSchema._type = await userResponse.json();
    return user;
  }
}
