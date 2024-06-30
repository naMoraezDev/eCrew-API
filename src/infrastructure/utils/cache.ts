import { FastifyRequest } from "fastify";
import { client } from "../db/redis/redis";

export async function saveDataToCache(request: FastifyRequest, data: any) {
  const key = request.routeOptions.url + JSON.stringify(request.query) || "";
  await client.setEx(key, 60 * 5, JSON.stringify(data));
  return data;
}
