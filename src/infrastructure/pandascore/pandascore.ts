import { HttpClient } from "../adapters/factories/http-client.factory";
import { matchListSchema } from "../../domain/schemas/match/match-list.schema";
import { tournamentSchema } from "../../domain/schemas/tournament/tournament.schema";
import { matchListQuerySchema } from "../../domain/schemas/match/match-list-query.schema";
import { tournamentListSchema } from "../../domain/schemas/tournament/tournament-list.schema";

interface PandascoreProtocol {
  getUpcomingMatchList: (
    query: typeof matchListQuerySchema._type
  ) => Promise<typeof matchListSchema._type>;
  getRunningMatchList: (
    query: typeof matchListQuerySchema._type
  ) => Promise<typeof matchListSchema._type>;
  getRunningR6SiegeTournaments: () => Promise<
    typeof tournamentListSchema._type
  >;
  getRunningValorantTournaments: () => Promise<
    typeof tournamentListSchema._type
  >;
  getTournamentBySlug(slug: string): Promise<typeof tournamentSchema._type>;
  getRunningLoLTournaments: () => Promise<typeof tournamentListSchema._type>;
  getRunningCsGoTournaments: () => Promise<typeof tournamentListSchema._type>;
  getRunningCodMWTournaments: () => Promise<typeof tournamentListSchema._type>;
  getRunningDota2Tournaments: () => Promise<typeof tournamentListSchema._type>;
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
      typeof matchListSchema._type
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
      typeof matchListSchema._type
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

  public async getRunningCodMWTournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/codmw/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getRunningCsGoTournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/csgo/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getRunningDota2Tournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/dota2/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getRunningLoLTournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/lol/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getRunningR6SiegeTournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/r6siege/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getRunningValorantTournaments() {
    const tournamentList = await this.httpClient.request<
      typeof tournamentListSchema._type
    >({
      input: `${this.baseUrl}/valorant/tournaments/running`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournamentList;
  }

  public async getTournamentBySlug(slug: string) {
    const tournament = await this.httpClient.request<
      typeof tournamentSchema._type
    >({
      input: `${this.baseUrl}/tournaments/${slug}`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      },
    });
    return tournament;
  }
}
