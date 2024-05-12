import { HttpClient } from "../adapters/factories/http-client.factory";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { runningMatchListSchema } from "../../domain/schemas/match/running-match-list.schema";
import { upcomingMatchListShema } from "../../domain/schemas/match/upcoming-match-list.schema";

interface PandascoreProtocol {
  getUpcomingMatchList: (
    query: typeof matchListQuerySchema._type
  ) => Promise<typeof upcomingMatchListShema._type>;
  getRunningMatchList: (
    query: typeof matchListQuerySchema._type
  ) => Promise<typeof runningMatchListSchema._type>;
}

export class Pandascore implements PandascoreProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.PRIVATE_PANDASCORE_API_URL ?? "";

  private readonly apiKey: string =
    process.env.PRIVATE_PANDASCORE_API_KEY ?? "";

  public async getUpcomingMatchList(query: typeof matchListQuerySchema._type) {
    const matchListData = await this.httpClient.request<
      typeof upcomingMatchListShema._type
    >({
      input: `${this.baseUrl}/matches/upcoming${
        query?.page || query?.filter || query?.per_page || query?.filter_type
          ? "?"
          : ""
      }${
        query?.filter
          ? `&filter${query?.filter_type ? `[${query?.filter_type}]` : ""}=${
              query?.filter
            }`
          : ""
      }${query?.per_page ? `&per_page=${query?.per_page}` : ""}${
        query?.page ? `&page=${query?.page}` : ""
      }`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return matchListData;
  }

  public async getRunningMatchList(query: typeof matchListQuerySchema._type) {
    const matchListData = await this.httpClient.request<
      typeof runningMatchListSchema._type
    >({
      input: `${this.baseUrl}/matches/running${
        query?.page || query?.filter || query?.per_page || query?.filter_type
          ? "?"
          : ""
      }${
        query?.filter
          ? `&filter${query?.filter_type ? `[${query?.filter_type}]` : ""}=${
              query?.filter
            }`
          : ""
      }${query?.per_page ? `&per_page=${query?.per_page}` : ""}${
        query?.page ? `&page=${query?.page}` : ""
      }`,
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
