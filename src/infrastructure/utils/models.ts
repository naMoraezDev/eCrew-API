import { FastifyInstance } from "fastify";

export async function models(app: FastifyInstance) {
  app.addSchema({ $id: "health" } as any);
  app.addSchema({ $id: "post" } as any);
  app.addSchema({ $id: "category" } as any);
  app.addSchema({ $id: "tag" } as any);
  app.addSchema({ $id: "match" } as any);
  app.addSchema({ $id: "game" } as any);
  app.addSchema({ $id: "preference" } as any);
  app.addSchema({ $id: "checkout" } as any);
  app.addSchema({ $id: "newsletter" } as any);
}
