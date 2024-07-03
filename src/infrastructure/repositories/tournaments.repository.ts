import { Pandascore } from "../pandascore/pandascore";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { tournamentListSchema } from "../../domain/schemas/tournaments/tournament-list.schema";

export interface TournamentsRepositoryProtocol {
  getRunningCodMWTournaments(): Promise<typeof tournamentListSchema._type>;
}

export class TournamentsRepository implements TournamentsRepositoryProtocol {
  public async getRunningCodMWTournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningCodMWTournaments();
    return tournaments;
  }
}
