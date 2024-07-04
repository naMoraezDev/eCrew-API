import { tournamentSchema } from "../schemas/tournament/tournament.schema";
import { tournamentListSchema } from "../schemas/tournament/tournament-list.schema";
import { TournamentRepository } from "../../infrastructure/repositories/tournament.repository";

export interface TournamentServiceProtocol {
  getRunningLoLTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCsGoTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningCodMWTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningDota2Tournaments(): Promise<typeof tournamentListSchema._type>;
  getTournamentBySlug(slug: string): Promise<typeof tournamentSchema._type>;
  getRunningR6SiegeTournaments(): Promise<typeof tournamentListSchema._type>;
  getRunningValorantTournaments(): Promise<typeof tournamentListSchema._type>;
}

export class TournamentService implements TournamentServiceProtocol {
  constructor(readonly tournamentsRepository: TournamentRepository) {}

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

  public async getTournamentBySlug(slug: string) {
    return await this.tournamentsRepository.getTournamentBySlug(slug);
  }
}
