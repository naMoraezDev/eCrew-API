import { z } from "zod";
import { FastifyInstance } from "fastify";
import { MatchService } from "../../domain/services/match.service";
// import { cacheMiddleware } from "../../application/middlewares/cache.router";
import { MatchController } from "../../application/controllers/match.controller";
import { MatchRepository } from "../../infrastructure/repositories/match.repository";
import { formattedMatchSchema } from "../../domain/schemas/match/formatted-match.schema";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { formattedMatchListSchema } from "../../domain/schemas/match/formatted-match-list.schema";

export async function matchRouter(app: FastifyInstance) {
  // app.addHook("onRequest", cacheMiddleware);

  app.get(
    "/matches/match/:id",
    {
      schema: {
        tags: ["matches"],
        summary: "Get a single match (by ID).",
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: formattedMatchSchema,
        },
      },
    },
    async (request, reply) => {
      await new MatchController(
        new MatchService(new MatchRepository())
      ).getMatchById(request, reply);
    }
  );

  app.get(
    "/matches/upcoming",
    {
      schema: {
        tags: ["matches"],
        summary: "Get a list of upcoming matches.",
        querystring: matchListQuerySchema,
        response: {
          200: formattedMatchListSchema,
        },
      },
    },
    async (request, reply) => {
      await new MatchController(
        new MatchService(new MatchRepository())
      ).getUpcomingMatchList(request, reply);
    }
  );

  app.get(
    "/matches/running",
    {
      schema: {
        tags: ["matches"],
        summary: "Get a list of running matches.",
        querystring: matchListQuerySchema,
        response: {
          200: formattedMatchListSchema,
        },
      },
    },
    async (request, reply) => {
      await new MatchController(
        new MatchService(new MatchRepository())
      ).getRunningMatchList(request, reply);
    }
  );
}
