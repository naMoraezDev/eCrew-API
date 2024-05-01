import { FastifyInstance } from "fastify";

export async function healthCheck(app: FastifyInstance) {
  app.get(
    "/health",
    {
      schema: {
        tags: ["health check"],
        summary: "Verifica a saúde e o desempenho da aplicação.",
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
