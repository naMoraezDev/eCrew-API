import { ZodError } from "zod";
import { FastifyInstance } from "fastify";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "One or more fields are missing or invalid.",
      errors: error.flatten().fieldErrors,
    });
  }
  return reply.status(500).send("Internal Server Error.");
};
