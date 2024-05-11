import { HttpClient } from "../adapters/factories/http-client.factory";
import { matchListchema } from "../../domain/schemas/match/match-list.schema";

interface PandascoreProtocol {
  getMatchList: () => Promise<any>;
}

export class Pandascore implements PandascoreProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.PRIVATE_PANDASCORE_API_URL ?? "";

  private readonly apiKey: string =
    process.env.PRIVATE_PANDASCORE_API_KEY ?? "";

  public async getMatchList() {
    const matchListData = await this.httpClient.request<
      typeof matchListchema._type
    >({
      input: `${this.baseUrl}/matches`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return matchListData;
  }
}
