import staticGameList from "../static/games.json";
import { gameListSchema } from "../../domain/schemas/games/game-list.schema";

export interface GameRepositoryProtocol {
  getGameList(): Promise<typeof gameListSchema._type>;
}

export class GameRepository implements GameRepositoryProtocol {
  public async getGameList(): Promise<typeof gameListSchema._type> {
    return staticGameList as typeof gameListSchema._type;
  }
}
