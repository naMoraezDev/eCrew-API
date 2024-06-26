import z from "zod";
import { FastifyInstance } from "fastify";
import { UserPreferencesService } from "../../domain/services/user-preferences.service";
import { userPreferencesSchema } from "../../domain/schemas/user-preferences/user-preferences.schema";
import { UserPreferencesController } from "../../application/controllers/user-preferences.controller";
import { authorizationMiddleware } from "../../application/middlewares/authorization-middleware.router";
import { UserPreferencesRepository } from "../../infrastructure/repositories/user-preferences.repository";

export async function userPreferencesRouter(app: FastifyInstance) {
  app.addHook("onRequest", authorizationMiddleware);

  app.get(
    "/user/preferences",
    {
      schema: {
        tags: ["user preferences"],
        summary: "Get the user preferences.",
        headers: z.object({
          authorization: z.string(),
        }),
        response: {
          200: userPreferencesSchema,
        },
      },
    },
    async (request, reply) => {
      await new UserPreferencesController(
        new UserPreferencesService(new UserPreferencesRepository())
      ).getUserPreferences(request, reply);
    }
  );

  app.post(
    "/user/preferences",
    {
      schema: {
        tags: ["user preferences"],
        summary: "Creates a obejct with the user preferences.",
        headers: z.object({
          authorization: z.string(),
        }),
        body: z.object({
          newsletter: z.boolean().nullable().optional(),
          subscription: z.boolean().nullable().optional(),
          stripe_customer_id: z.string().nullable().optional(),
        }),
        response: {
          409: z.string(),
          201: userPreferencesSchema,
        },
      },
    },
    async (request, reply) => {
      await new UserPreferencesController(
        new UserPreferencesService(new UserPreferencesRepository())
      ).createUserPreferences(request, reply);
    }
  );

  app.put(
    "/user/preferences",
    {
      schema: {
        tags: ["user preferences"],
        summary: "Updates the user preferences.",
        headers: z.object({
          authorization: z.string(),
        }),
        body: z.object({
          newsletter: z.boolean().nullable().optional(),
          subscription: z.boolean().nullable().optional(),
          stripe_customer_id: z.string().nullable().optional(),
        }),
        response: {
          204: z.string(),
        },
      },
    },
    async (request, reply) => {
      await new UserPreferencesController(
        new UserPreferencesService(new UserPreferencesRepository())
      ).updateUserPreferences(request, reply);
    }
  );
}
