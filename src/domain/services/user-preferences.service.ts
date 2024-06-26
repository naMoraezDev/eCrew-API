import { userPreferencesSchema } from "../schemas/user-preferences/user-preferences.schema";
import { UserPreferencesRepository } from "../../infrastructure/repositories/user-preferences.repository";

export namespace UserPreferencesServiceProtocol {
  export type Preferences = {
    newsletter?: boolean;
    subscription?: boolean;
    stripe_customer_id?: string;
  };

  export type Params = {
    uid: string;
    preferences: Preferences;
  };
}
export interface UserPreferencesServiceProtocol {
  getUserPreferences(
    uid: string
  ): Promise<typeof userPreferencesSchema._type | null>;
  createUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<typeof userPreferencesSchema._type | null>;
  updateUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<void>;
}

export class UserPreferencesService implements UserPreferencesServiceProtocol {
  constructor(readonly userPreferencesRepository: UserPreferencesRepository) {}

  public async getUserPreferences(uid: string) {
    return await this.userPreferencesRepository.getUserPreferences(uid);
  }

  public async createUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ) {
    return await this.userPreferencesRepository.createUserPreferences(params);
  }

  public async updateUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ) {
    return await this.userPreferencesRepository.updateUserPreferences(params);
  }
}
