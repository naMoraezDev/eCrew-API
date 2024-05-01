import { FetchHttpClientAdapter } from "../implementation/fetch-http-client.adapter";

export type HttpRequest = {
  url: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

export interface HttpClient<Type = any> {
  request: (data: HttpRequest) => Promise<Type>;
}

export const httpClientFactory = (): HttpClient => new FetchHttpClientAdapter();
