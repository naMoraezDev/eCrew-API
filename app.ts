import fastify from "fastify";
import routes from "./src/infra/http/routes";
import { fastifyExpress } from "@fastify/express";

const app = fastify();

app.register(fastifyExpress);
app.register(routes, { prefix: "/api" });

export default app;
