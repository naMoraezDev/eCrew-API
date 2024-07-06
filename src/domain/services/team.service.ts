import { teamListSchema } from "../schemas/team/team-list.schema";
import { TeamRepository } from "../../infrastructure/repositories/team.repository";

export namespace TeamServiceProtocol {
  export type Params = {
    page?: string;
    per_page?: string;
  };
}

export interface TeamServiceProtocol {
  getR6Teams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
  getCodTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
  getLoLTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
  getCsGoTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
  getDota2Teams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
  getValorantTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params): Promise<typeof teamListSchema._type>;
}

export class TeamService implements TeamServiceProtocol {
  constructor(readonly teamRepository: TeamRepository) {}
  public async getR6Teams({ page, per_page }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getR6Teams({ page, per_page });
  }

  public async getCodTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getCodTeams({ page, per_page });
  }

  public async getLoLTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getLoLTeams({ page, per_page });
  }

  public async getCsGoTeams({ page, per_page }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getCsGoTeams({ page, per_page });
  }

  public async getDota2Teams({ page, per_page }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getDota2Teams({ page, per_page });
  }

  public async getValorantTeams({
    page,
    per_page,
  }: TeamServiceProtocol.Params) {
    return await this.teamRepository.getValorantTeams({ page, per_page });
  }
}
