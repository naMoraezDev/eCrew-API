import fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import packageJSON from "./package.json";
import routes from "./src/infra/http/routes";
import fastifySwagger from "@fastify/swagger";
import { fastifyExpress } from "@fastify/express";
import fastifySwaggerUI from "@fastify/swagger-ui";

const app = fastify();

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    schemes: ["http", "https"],
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
