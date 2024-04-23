import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import routes from "./src/infra/http/routes";
import { fastifyExpress } from "@fastify/express";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyExpress);
app.register(routes, { prefix: "/api" });

export default app;
