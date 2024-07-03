import { tournamentListSchema } from "../schemas/tournaments/tournament-list.schema";
import { TournamentsRepository } from "../../infrastructure/repositories/tournaments.repository";

export interface TournamentsServiceProtocol {
  getRunningLoLTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCsGoTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCodMWTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningDota2Tournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningR6SiegeTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningValorantTournaments(): Promise<typeof tournamentListSchema._type>;
}

export class TournamentsService implements TournamentsServiceProtocol {
  constructor(readonly tournamentsRepository: TournamentsRepository) {}

  public async getRunningCodMWTournaments() {
    return await this.tournamentsRepository.getRunningCodMWTournaments();
  }

  public async getRunningCsGoTournaments() {
    return await this.tournamentsRepository.getRunningCsGoTournaments();
  }

  public async getRunningDota2Tournaments() {
    return await this.tournamentsRepository.getRunningDota2Tournaments();
  }

  public async getRunningLoLTournaments() {
    return await this.tournamentsRepository.getRunningLoLTournaments();
  }

  public async getRunningR6SiegeTournaments() {
    return await this.tournamentsRepository.getRunningR6SiegeTournaments();
  }

  public async getRunningValorantTournaments() {
    return await this.tournamentsRepository.getRunningValorantTournaments();
  }
}
