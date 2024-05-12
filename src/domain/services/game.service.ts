import { gameListSchema } from "../schemas/games/game-list.schema";
import { GameRepository } from "../../infrastructure/repositories/game.repository";

export interface GameServiceProtocol {
  getGameList(): Promise<typeof gameListSchema._type>;
}

export class GameService implements GameServiceProtocol {
  constructor(readonly gamesRepository: GameRepository) {}

  public async getGameList() {
    return await this.gamesRepository.getGameList();
  }
}
