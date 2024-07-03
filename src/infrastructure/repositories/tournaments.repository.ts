import { Pandascore } from "../pandascore/pandascore";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { tournamentListSchema } from "../../domain/schemas/tournaments/tournament-list.schema";

export interface TournamentsRepositoryProtocol {
  getRunningLoLTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCsGoTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCodMWTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningDota2Tournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningR6SiegeTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningValorantTournaments(): Promise<typeof tournamentListSchema._type>;
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

  public async getRunningCsGoTournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningCsGoTournaments();
    return tournaments;
  }

  public async getRunningDota2Tournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningDota2Tournaments();
    return tournaments;
  }

  public async getRunningLoLTournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningLoLTournaments();
    return tournaments;
  }

  public async getRunningR6SiegeTournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningR6SiegeTournaments();
    return tournaments;
  }

  public async getRunningValorantTournaments(): Promise<
    typeof tournamentListSchema._type
  > {
    const tournaments = await new Pandascore(
      httpClientFactory()
    ).getRunningValorantTournaments();
    return tournaments;
  }
}
