import { z } from "zod";
import { FastifyInstance } from "fastify";
import { TournamentService } from "../../domain/services/tournament.service";
import { tournamentSchema } from "../../domain/schemas/tournament/tournament.schema";
import { TournamentController } from "../../application/controllers/tournament.controller";
import { tournamentListSchema } from "../../domain/schemas/tournament/tournament-list.schema";
import { TournamentRepository } from "../../infrastructure/repositories/tournament.repository";

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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
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
      await new TournamentController(
        new TournamentService(new TournamentRepository())
      ).getRunningValorantTournaments(request, reply);
    }
  );

  app.get(
    "/tournaments/:slug",
    {
      schema: {
        tags: ["tournaments"],
        summary: "Get a single tournament (by slug).",
        params: z.object({
          slug: z.string(),
        }),
        response: {
          200: tournamentSchema,
        },
      },
    },
    async (request, reply) => {
      await new TournamentController(
        new TournamentService(new TournamentRepository())
      ).getTournamentBySlug(request, reply);
    }
  );
}
