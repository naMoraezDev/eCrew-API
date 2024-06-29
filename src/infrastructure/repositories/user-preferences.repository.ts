import { preferencesModel } from "../db/mongoDB/models/preferences.model";
import { UserPreferencesServiceProtocol } from "../../domain/services/user-preferences.service";
import { userPreferencesSchema } from "../../domain/schemas/user-preferences/user-preferences.schema";

export class UserPreferencesRepository
  implements UserPreferencesServiceProtocol
{
  public async getUserPreferences(
    uid: string
  ): Promise<typeof userPreferencesSchema._type | null> {
    const userPreferences = await preferencesModel.findOne({ uid }).exec();
    return userPreferences as typeof userPreferencesSchema._type | null;
  }

  public async createUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<typeof userPreferencesSchema._type | null> {
    const userPreferences = await preferencesModel
      .findOne({
        uid: params.uid,
      })
      .exec();
    if (userPreferences) {
      return null;
    }
    const newUserPreferences = await preferencesModel.create({
      ...params,
      uid: params.uid,
    });
    return newUserPreferences as typeof userPreferencesSchema._type;
  }

  public async updateUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<void> {
    await preferencesModel
      .updateOne(
        {
          uid: params.uid,
        },
        {
          ...params,
        }
      )
      .exec();
  }
}
