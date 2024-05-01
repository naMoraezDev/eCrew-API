import { HttpClient, HttpRequest } from "../factories/http-client.factory";

export class FetchHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    const response = await fetch(data.url, {
      method: data.method,
      headers: data.headers,
      body: JSON.stringify(data.body),
    });
    return await response.json();
  }
}
