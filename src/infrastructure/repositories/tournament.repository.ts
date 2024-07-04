import { Pandascore } from "../pandascore/pandascore";
import { httpClientFactory } from "../adapters/factories/http-client.factory";
import { TournamentServiceProtocol } from "../../domain/services/tournament.service";
import { tournamentSchema } from "../../domain/schemas/tournament/tournament.schema";
import { tournamentListSchema } from "../../domain/schemas/tournament/tournament-list.schema";

export class TournamentRepository implements TournamentServiceProtocol {
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

  public async getTournamentBySlug(
    slug: string
  ): Promise<typeof tournamentSchema._type> {
    const tournament = await new Pandascore(
      httpClientFactory()
    ).getTournamentBySlug(slug);
    return tournament;
  }
}
