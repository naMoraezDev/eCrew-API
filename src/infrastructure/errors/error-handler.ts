import { ZodError } from "zod";
import { FastifyInstance } from "fastify";
import { NotFoundError } from "./error-instances/not-found";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "One or more fields are missing or invalid.",
      errors: error.flatten().fieldErrors,
    });
  }
  if (error instanceof NotFoundError) {
    return reply.status(404).send({
      message: error.message,
    });
  }
  return reply.status(500).send("Internal Server Error.");
};
