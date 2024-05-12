import { FastifyInstance } from "fastify";
import { MatchService } from "../../domain/services/match.service";
import { MatchController } from "../../application/controllers/match.controller";
import { MatchRepository } from "../../infrastructure/repositories/match.repository";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { runningMatchListSchema } from "../../domain/schemas/match/running-match-list.schema";
import { upcomingMatchListShema } from "../../domain/schemas/match/upcoming-match-list.schema";

export async function matchRouter(app: FastifyInstance) {
  app.get(
    "/matches/upcoming",
    {
      schema: {
        tags: ["matches"],
        summary: "Get a list off upcoming matches.",
        querystring: matchListQuerySchema,
        response: {
          200: upcomingMatchListShema,
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
        summary: "Get a list off running matches.",
        querystring: matchListQuerySchema,
        response: {
          200: runningMatchListSchema,
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
