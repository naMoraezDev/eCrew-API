import { FastifyReply, FastifyRequest } from "fastify";
import {
  UserPreferencesService,
  UserPreferencesServiceProtocol,
} from "../../domain/services/user-preferences.service";
import { firebaseAdmin } from "../../infrastructure/firebase/firebase-admin";

export class UserPreferencesController {
  constructor(readonly userPreferencesService: UserPreferencesService) {}

  public async getUserPreferences(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const headers = request.headers as { authorization: string };
    const { authorization } = headers;
    const decodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(authorization)
      .catch(() => null);
    const userPreferences =
      await this.userPreferencesService.getUserPreferences(
        decodedIdToken?.uid || ""
      );
    if (!userPreferences) {
      return reply.status(404).send("User preferences not found!");
    }
    return reply.status(200).send(userPreferences);
  }

  public async createUserPreferences(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const headers = request.headers as { authorization: string };
    const { authorization } = headers;
    const decodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(authorization)
      .catch(() => null);
    const body = request.body as UserPreferencesServiceProtocol.Preferences;
    const userPreferences =
      await this.userPreferencesService.createUserPreferences({
        preferences: body,
        uid: decodedIdToken?.uid || "",
      });
    if (!userPreferences) {
      return reply
        .status(409)
        .send("User preferences already exists for this user!");
    }
    return reply.status(201).send(userPreferences);
  }

  public async updateUserPreferences(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const headers = request.headers as { authorization: string };
    const { authorization } = headers;
    const decodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(authorization)
      .catch(() => null);
    const body = request.body as UserPreferencesServiceProtocol.Preferences;
    await this.userPreferencesService.updateUserPreferences({
      preferences: body,
      uid: decodedIdToken?.uid || "",
    });
    return reply.status(204).send("User preferences updated!");
  }
}
