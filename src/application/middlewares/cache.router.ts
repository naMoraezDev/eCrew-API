import { FastifyReply, FastifyRequest } from "fastify";
import { client } from "../../infrastructure/db/redis/redis";

export async function cacheMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const key =
    request.routeOptions.url +
      JSON.stringify(request.params) +
      JSON.stringify(request.query) || "";
  try {
    const cachedData = await client.get(key);
    if (cachedData) {
      console.log(`Cache hit: ${key}`);
      return reply.status(200).send(JSON.parse(cachedData));
    } else {
      console.log(`Cache miss: ${key}`);
      return;
    }
  } catch (error) {
    console.log(`Error in cache: ${error}`);
    return;
  }
}
