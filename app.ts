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
import packageJSON from "./package.json";
import routes from "./src/infra/http/routes";
import fastifySwagger from "@fastify/swagger";
import { fastifyExpress } from "@fastify/express";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

app.register(fastifyView, {
  engine: {
    pug,
  },
});

app.register(fastifyCors, {
  origin: "*",
});

app.get("/", async (request, reply) => {
  return reply.view(path.join("public", "views", "index.pug"), {
    title: "ePosts API",
    version: packageJSON.version,
    docs: `${request.protocol}://${request.hostname}/docs`,
  });
});

app.register(fastifySwagger, {
  swagger: {
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "ePosts API",
      version: packageJSON.version,
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
