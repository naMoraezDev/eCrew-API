import { userPreferencesModel } from "../db/mongoDB/models/user-preferences.model";
import { UserPreferencesServiceProtocol } from "../../domain/services/user-preferences.service";
import { userPreferencesSchema } from "../../domain/schemas/user-preferences/user-preferences.schema";

export class UserPreferencesRepository
  implements UserPreferencesServiceProtocol
{
  public async getUserPreferences(
    uid: string
  ): Promise<typeof userPreferencesSchema._type | null> {
    const userPreferences = await userPreferencesModel.findOne({ uid }).exec();
    return userPreferences as typeof userPreferencesSchema._type | null;
  }

  public async createUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<typeof userPreferencesSchema._type | null> {
    const userPreferences = await userPreferencesModel
      .findOne({
        uid: params.uid,
      })
      .exec();
    if (userPreferences) {
      return null;
    }
    const newUserPreferences = await userPreferencesModel.create({
      ...params.preferences,
      uid: params.uid,
    });
    return newUserPreferences as typeof userPreferencesSchema._type;
  }

  public async updateUserPreferences(
    params: UserPreferencesServiceProtocol.Params
  ): Promise<void> {
    await userPreferencesModel
      .updateOne(
        {
          uid: params.uid,
        },
        {
          ...params.preferences,
        }
      )
      .exec();
  }

  public async removeSavedPost(
    params: UserPreferencesServiceProtocol.SavedPostsParams
  ): Promise<void> {
    await userPreferencesModel
      .updateOne(
        {
          uid: params.uid,
        },
        { $pull: { saved_posts: params.postSlug } }
      )
      .exec();
  }

  public async pushToSavedPosts(
    params: UserPreferencesServiceProtocol.SavedPostsParams
  ): Promise<void> {
    await userPreferencesModel
      .updateOne(
        {
          uid: params.uid,
        },
        { $push: { saved_posts: params.postSlug } }
      )
      .exec();
  }
}
