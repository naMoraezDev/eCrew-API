import { z } from "zod";

export const twitchUserSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      login: z.string(),
      created_at: z.string(),
      view_count: z.number(),
      description: z.string(),
      display_name: z.string(),
      broadcaster_type: z.string(),
      profile_image_url: z.string(),
      offline_image_url: z.string(),
    })
  ),
});
