import { Pandascore } from "../pandascore/pandascore";
import { TeamServiceProtocol } from "../../domain/services/team.service";
import { httpClientFactory } from "../adapters/factories/http-client.factory";

export class TeamRepository implements TeamServiceProtocol {
  public async getCodTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getCodMWTeams({
      page,
      per_page,
    });
  }

  public async getCsGoTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getCsGoTeams({
      page,
      per_page,
    });
  }

  public async getDota2Teams({ page, per_page }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getDota2Teams({
      page,
      per_page,
    });
  }

  public async getLoLTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getLoLTeams({
      page,
      per_page,
    });
  }

  public async getR6Teams({ page, per_page }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getR6SiegeTeams({
      page,
      per_page,
    });
  }

  public async getValorantTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params) {
    return await new Pandascore(httpClientFactory()).getValorantTeams({
      page,
      per_page,
    });
  }
}
