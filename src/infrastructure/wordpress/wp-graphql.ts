import { HttpClient } from "../adapters/factories/http-client.factory";

export namespace WPGraphQLProtocol {
  export type Params = {
    categorySlug: string;
    after?: string | null;
    number?: string | null;
    before?: string | null;
  };
}

export interface WPGraphQLProtocol {
  getPostsByCategorySlug({
    after,
    before,
    number,
    categorySlug,
  }: WPGraphQLProtocol.Params): Promise<any>;
}

export class WPGraphQL implements WPGraphQLProtocol {
  constructor(readonly httpClient: HttpClient) {}

  private readonly baseUrl: string = process.env.WORDPRESS_GRAPHQL_URL || "";

  public async getPostsByCategorySlug({
    categorySlug,
    after = null,
    before = null,
    number = null,
  }: WPGraphQLProtocol.Params) {
    const posts = await this.httpClient.request<any>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            posts(where: { categoryName: "${categorySlug}" }, after: "${after}", before: "${before}", first: ${number}) {
              edges {
                node {
                  id
                  slug
                  title
                  excerpt
                  date
                  modified
                  featuredImage {
                    node {
                      sourceUrl
                      sizes
                      caption
                    }
                  }
                  categories {
                    edges {
                      node {
                        id
                        slug
                      }
                    }
                  }
                  tags {
                    edges {
                      node {
                        id
                        slug
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
              }
            }
          }`,
        } as any,
      },
    });

    return posts;
  }
}
