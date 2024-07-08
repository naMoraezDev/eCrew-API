import z from "zod";
import { FastifyInstance } from "fastify";
import { TwitchService } from "../../domain/services/twitch.service";
import { twitchUserSchema } from "../../domain/schemas/twitch/user.schema";
import { TwitchController } from "../../application/controllers/twitch.controller";
import { TwitchRepository } from "../../infrastructure/repositories/twitch.repository";

export async function twitchRouter(app: FastifyInstance) {
  app.get(
    "/twitch/users/:login",
    {
      schema: {
        tags: ["twitch"],
        summary: "Get information about a single twitch user (by login name).",
        params: z.object({
          login: z.string(),
        }),
        response: {
          200: twitchUserSchema,
        },
      },
    },
    async (request, reply) => {
      await new TwitchController(
        new TwitchService(new TwitchRepository())
      ).getTwitchUser(request, reply);
    }
  );
}
