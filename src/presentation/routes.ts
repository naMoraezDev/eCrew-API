import { FastifyInstance } from "fastify";
import { tagRouter } from "./tag/tag.router";
import { postRouter } from "./post/post.router";
import { gameRouter } from "./game/game.router";
import { matchRouter } from "./match/match.router";
import { healthRouter } from "./health/health.router";
import { categoryRouter } from "./category/category.router";
import { checkoutRouter } from "./checkout/checkout.router";
import { webhooksRouter } from "./webhooks/webhooks.router";
import { wPGraphQLRouter } from "./wp-graphql/wp-graphql.router";
import { newsletterRouter } from "./newsletter/newsletter.router";
import { tournamentsRouter } from "./tournaments/tournaments.router";
import { userPreferencesRouter } from "./user-preferences/user-preferences.router";

export async function routes(app: FastifyInstance) {
  app.register(healthRouter);
  app.register(wPGraphQLRouter);
  app.register(postRouter);
  app.register(categoryRouter);
  app.register(tagRouter);
  app.register(tournamentsRouter);
  app.register(matchRouter);
  app.register(gameRouter);
  app.register(userPreferencesRouter);
  app.register(checkoutRouter);
  app.register(newsletterRouter);
  app.register(webhooksRouter);
}
