import { WPGraphQLProtocol } from "../../infrastructure/wordpress/wp-graphql";
import { WPGraphQLRepository } from "../../infrastructure/repositories/wp-graphql.repository";

export class WPGraphQLService implements WPGraphQLProtocol {
  constructor(readonly wpGraphQLRepository: WPGraphQLRepository) {}

  public async getPostsByCategorySlug({
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

  public async getCategoryBySlug(slug: string) {
    return await this.wpGraphQLRepository.getCategoryBySlug(slug);
  }

  public async getPostBySlug(slug: string) {
    return await this.wpGraphQLRepository.getPostBySlug(slug);
  }

  public async getPostsBySearchTerm({
    term,
    after,
    before,
    number,
  }: WPGraphQLProtocol.SearchParams) {
    return await this.wpGraphQLRepository.getPostsBySearchTerm({
      term,
      after,
      before,
      number,
    });
  }
}
