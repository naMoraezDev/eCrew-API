import { firebaseAdmin } from "../../infrastructure/firebase/firebase-admin";

export interface AuthorizationMiddlewareProtocol {
  authorize: (params: AuthorizationMiddlewareProtocol.Params) => Promise<void>;
}

export namespace AuthorizationMiddlewareProtocol {
  export type Params = {
    idToken: string;
  };
}

export class AuthorizationMiddleware
  implements AuthorizationMiddlewareProtocol
{
  constructor(readonly firebase: typeof firebaseAdmin) {}

  async authorize({ idToken }: AuthorizationMiddlewareProtocol.Params) {
    await this.firebase.auth().verifyIdToken(idToken);
  }
}
