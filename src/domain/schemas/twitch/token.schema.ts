import { z } from "zod";

export const twitchTokenSchema = z.object({
  token_type: z.string(),
  expires_in: z.number(),
  access_token: z.string(),
});
