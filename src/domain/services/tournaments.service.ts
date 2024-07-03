import { tournamentListSchema } from "../schemas/tournaments/tournament-list.schema";
import { TournamentsRepository } from "../../infrastructure/repositories/tournaments.repository";

export interface TournamentsServiceProtocol {
  getRunningCodMWTournaments(): Promise<typeof tournamentListSchema._type>;
}

export class TournamentsService implements TournamentsServiceProtocol {
  constructor(readonly tournamentsRepository: TournamentsRepository) {}

  public async getRunningCodMWTournaments() {
    return await this.tournamentsRepository.getRunningCodMWTournaments();
  }
}
