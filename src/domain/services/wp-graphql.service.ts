import { WPGraphQLProtocol } from "../../infrastructure/wordpress/wp-graphql";
import { WPGraphQLRepository } from "../../infrastructure/repositories/wp-graphql.repository";

export class WPGraphQLService implements WPGraphQLProtocol {
  constructor(readonly wpGraphQLRepository: WPGraphQLRepository) {}

  async getPostsByCategorySlug({
    after,
    before,
    number,
    categorySlug,
  }: WPGraphQLProtocol.Params) {
    return await this.wpGraphQLRepository.getPostsByCategorySlug({
      after,
      before,
      number,
      categorySlug,
    });
  }
}
