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
import fastifySwagger from "@fastify/swagger";
import { fastifyExpress } from "@fastify/express";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { routes } from "./src/presentation/_routes";
import { viewRouter } from "./src/presentation/view.router";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { errorHandler } from "./src/infrastructure/errors/error-handler";

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

app.register(viewRouter);

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
  routePrefix: "/swagger",
  theme: {
    title: "ePosts API",
    css: [
      {
        filename: "theme.css",
        content:
          'body { padding-bottom: 80px } .topbar { position: sticky } .topbar { top: 0 } .topbar { z-index: 1 } .topbar { width: 100% } .link img { display: none } .link:after { content: "ePosts" }',
      },
    ],
  },
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyExpress);
app.register(routes, { prefix: "/api" });

app.setErrorHandler(errorHandler);

export default app;
