import { FastifyInstance } from "fastify";
import { TournamentsService } from "../../domain/services/tournaments.service";
import { TournamentsController } from "../../application/controllers/tournaments.controller";
import { tournamentListSchema } from "../../domain/schemas/tournaments/tournament-list.schema";
import { TournamentsRepository } from "../../infrastructure/repositories/tournaments.repository";

export async function tournamentsRouter(app: FastifyInstance) {
  app.get(
    "/codmw/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running Cod MW tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningCodMWTournaments(request, reply);
    }
  );
}
