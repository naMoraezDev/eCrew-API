import path from "path";
import { FastifyInstance } from "fastify";
import packageJSON from "../../package.json";

export async function viewRouter(app: FastifyInstance) {
  app.get("*", async (request, reply) => {
    return reply.view(path.join("public", "views", "index.pug"), {
      title: "eCrew API",
      version: packageJSON.version,
      docs: `${request.protocol}://${request.hostname}/swagger`,
      repository: "https://github.com/naMoraezDev/eposts-api",
    });
  });
}
