import { HttpClient, HttpRequest } from "../factories/http-client.factory";

export class FetchHttpClientAdapter implements HttpClient {
  private readonly baseUrl: string =
    process.env.PRIVATE_WORDPRESS_API_URL ?? "";

  async request({ input, init }: HttpRequest) {
    const response = await fetch(`${this.baseUrl}${input}`, {
      method: init?.method,
      headers: init?.headers,
      body: JSON.stringify(init?.body),
    });
    return await response.json();
  }
}
