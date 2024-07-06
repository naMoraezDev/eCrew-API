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
    const category = await new WPGraphQL(httpClientFactory()).getCategoryBySlug(
      slug
    );
    if (category.data.category.extraFields.featuredPosts) {
      const featuredPosts = Promise.all(
        category.data.category.extraFields.featuredPosts.edges.map(
          async (post: any) => {
            return await new WPGraphQL(
              httpClientFactory()
            ).getSimplifiedPostBySlug(post.node.slug);
          }
        )
      );
      category.data.category.extraFields.featuredPosts = await featuredPosts;
      return category;
    }
    return category;
  }

  public async getPostBySlug(slug: string) {
    return await new WPGraphQL(httpClientFactory()).getPostBySlug(slug);
  }

  public async getPostsBySearchTerm({
    term,
    after,
    number,
    before,
  }: WPGraphQLProtocol.SearchParams) {
    return await new WPGraphQL(httpClientFactory()).getPostsBySearchTerm({
      term,
      after,
      number,
      before,
    });
  }

  public async getTags() {
    return await new WPGraphQL(httpClientFactory()).getTags();
  }
}
