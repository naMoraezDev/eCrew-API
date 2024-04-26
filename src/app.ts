import pug from "pug";
import path from "path";
import fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import fastifyView from "@fastify/view";
import routes from "./infra/http/routes";
import packageJSON from "../package.json";
import fastifySwagger from "@fastify/swagger";
import { fastifyExpress } from "@fastify/express";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyView, {
  engine: {
    pug,
  },
});

app.register(fastifyCors, {
  origin: "*",
});

app.get("/", async (_request, reply) => {
  return reply.view(path.join("src", "views", "index.pug"), {
    title: "ePost API",
  });
});

app.register(fastifySwagger, {
  swagger: {
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "ePost API",
      version: packageJSON.version ?? "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyExpress);
app.register(routes, { prefix: "/api" });

export default app;
