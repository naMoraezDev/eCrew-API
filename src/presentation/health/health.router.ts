import { FastifyInstance } from "fastify";
import { healthSchema } from "../../domain/schemas/health/health.schema";

export async function healthRouter(app: FastifyInstance) {
  app.get(
    "/health",
    {
      schema: {
        tags: ["health check"],
        summary: "Checks application health and performance.",
        response: {
          200: healthSchema,
        },
      },
    },
    async (_, reply) => {
      let healthcheck = {
        message: "OK",
        timestamp: Date.now(),
        uptime: process.uptime(),
      };
      try {
        return reply.send(healthcheck);
      } catch (error: any) {
        healthcheck.message = error;
        return reply.status(503).send(healthcheck);
      }
    }
  );
}
