import { HttpClient } from "../adapters/factories/http-client.factory";
import { categorySchema } from "../../domain/schemas/wp-graphql/category.schema";
import { postListSchema } from "../../domain/schemas/wp-graphql/post-list.schema";

export namespace WPGraphQLProtocol {
  export type Params = {
    categorySlug: string;
    after?: string | null;
    number?: string | null;
    before?: string | null;
  };

  export type SearchParams = {
    term: string;
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
  }: WPGraphQLProtocol.Params): Promise<typeof postListSchema._type>;
  getCategoryBySlug(slug: string): Promise<typeof categorySchema._type>;
  getPostBySlug(slug: string): Promise<any>;
  getPostsBySearchTerm({
    term,
    after,
    before,
    number,
  }: WPGraphQLProtocol.SearchParams): Promise<any>;
  getTags(): Promise<any>;
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
    const posts = await this.httpClient.request<typeof postListSchema._type>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            posts(${
              categorySlug !== "all"
                ? `where: { categoryName: "${categorySlug}" },`
                : ""
            } after: "${after}", before: "${before}", first: ${number}) {
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

  public async getCategoryBySlug(slug: string) {
    const category = await this.httpClient.request<typeof categorySchema._type>(
      {
        input: `${this.baseUrl}`,
        init: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            query: `{
            category(id: "${slug}", idType: SLUG) {
              id
              slug
              name
              description
              extraFields {
                isEditorial
                isHome
                featuredPosts {
                  edges {
                    node {
                      id
                      slug
                    }
                  }
                }
              }
            }
          }`,
          } as any,
        },
      }
    );

    return category;
  }

  public async getPostBySlug(slug: string) {
    const post = await this.httpClient.request<any>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            post(id: "${slug}", idType: SLUG) {
              id
              slug
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  sizes
                  caption
                }
              }
              date
              modified
              author {
                node {
                  id
                  slug
                  name
                  firstName
                  lastName
                  nicename
                  nicename
                  description
                  avatar {
                    url
                    height
                    width
                    size
                    foundAvatar
                  }
                }
              }
              categories {
                edges {
                  node {
                    id
                    slug
                    name
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    slug
                    name
                  }
                }
              }
              editorBlocks {
                name
                renderedHtml
              }
              content
            }
          }`,
        } as any,
      },
    });

    return post;
  }

  public async getPostsBySearchTerm({
    term,
    after = null,
    before = null,
    number = null,
  }: WPGraphQLProtocol.SearchParams) {
    const posts = await this.httpClient.request<any>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            posts(where: { search: "${term}" }, after: "${after}", before: "${before}", first: ${number}) {
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

  public async getTags() {
    const tags = await this.httpClient.request<any>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            tags {
              edges {
                node {
                  id
                  slug
                  name
                  count
                }
              }
            }
          }`,
        } as any,
      },
    });

    return tags;
  }

  public async getSimplifiedPostBySlug(slug: string) {
    const post = await this.httpClient.request<any>({
      input: `${this.baseUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          query: `{
            post(id: "${slug}", idType: SLUG) {
              id
              slug
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  sizes
                  caption
                }
              }
              date
              modified
              categories {
                edges {
                  node {
                    id
                    slug
                    name
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    slug
                    name
                  }
                }
              }
            }
          }`,
        } as any,
      },
    });

    return post;
  }
}
