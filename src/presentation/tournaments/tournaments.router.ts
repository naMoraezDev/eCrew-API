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

  app.get(
    "/csgo/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running CS:GO tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningCsGoTournaments(request, reply);
    }
  );

  app.get(
    "/lol/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running League of Legends tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningLoLTournaments(request, reply);
    }
  );

  app.get(
    "/dota2/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running Dota 2 tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningDota2Tournaments(request, reply);
    }
  );

  app.get(
    "/r6siege/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running Rainbow Six Siege tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningR6SiegeTournaments(request, reply);
    }
  );

  app.get(
    "/valorant/tournaments/running",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a list of running Valorant tournaments.",
        response: {
          200: tournamentListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentsController(
        new TournamentsService(new TournamentsRepository())
      ).getRunningValorantTournaments(request, reply);
    }
  );
}
