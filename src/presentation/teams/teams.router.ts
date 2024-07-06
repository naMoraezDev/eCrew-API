import { z } from "zod";
import { FastifyInstance } from "fastify";
import { TeamService } from "../../domain/services/team.service";
import { teamListSchema } from "../../domain/schemas/team/team-list.schema";
import { TeamController } from "../../application/controllers/team.controller";
import { TeamRepository } from "../../infrastructure/repositories/team.repository";

export async function teamsRouter(app: FastifyInstance) {
  app.get(
    "/codmw/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of Cod MW teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getCodMWTeams(request, reply);
    }
  );

  app.get(
    "/csgo/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of CS:GO teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getCsGoTeams(request, reply);
    }
  );

  app.get(
    "/lol/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of League of Legends teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getLoLTeams(request, reply);
    }
  );

  app.get(
    "/dota2/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of Dota 2 teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getDota2Teams(request, reply);
    }
  );

  app.get(
    "/r6siege/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of Rainbow Six Siege teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getR6SiegeTeams(request, reply);
    }
  );

  app.get(
    "/valorant/teams",
    {
      schema: {
        tags: ["teams"],
        summary: "Get a list of Valorant teams.",
        querystring: z.object({
          page: z.string().optional(),
          per_page: z.string().optional(),
        }),
        response: {
          200: teamListSchema,
        },
      },
    },
    async (request, reply) => {
      await new TeamController(
        new TeamService(new TeamRepository())
      ).getValorantTeams(request, reply);
    }
  );
}
