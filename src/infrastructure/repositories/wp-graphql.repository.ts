import { WPGraphQL, WPGraphQLProtocol } from "../wordpress/wp-graphql";
import { httpClientFactory } from "../adapters/factories/http-client.factory";

export class WPGraphQLRepository implements WPGraphQLProtocol {
  public async getPostsByCategorySlug({
    after,
    number,
    before,
    categorySlug,
  }: WPGraphQLProtocol.Params) {
    return await new WPGraphQL(httpClientFactory()).getPostsByCategorySlug({
      after,
      number,
      before,
      categorySlug,
    });
  }

  public async getCategoryBySlug(slug: string) {
    return await new WPGraphQL(httpClientFactory()).getCategoryBySlug(slug);
  }

  public async getPostBySlug(slug: string) {
    return await new WPGraphQL(httpClientFactory()).getPostBySlug(slug);
  }
}
