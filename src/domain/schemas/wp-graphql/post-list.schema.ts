import { z } from "zod";

export const postListSchema = z.object({
  data: z.object({
    posts: z.object({
      edges: z.array(
        z.object({
          node: z.object({
            id: z.string(),
            slug: z.string(),
            title: z.string(),
            excerpt: z.string(),
            date: z.string(),
            modified: z.string(),
            featuredImage: z.object({
              node: z.object({
                sourceUrl: z.string(),
                sizes: z.string(),
                caption: z.string().nullable(),
              }),
            }),
            categories: z.object({
              edges: z.array(
                z.object({
                  node: z.object({
                    id: z.string(),
                    slug: z.string(),
                    name: z.string(),
                  }),
                })
              ),
            }),
            tags: z.object({
              edges: z.array(
                z.object({
                  node: z.object({
                    id: z.string(),
                    slug: z.string(),
                    name: z.string(),
                  }),
                })
              ),
            }),
          }),
        }),
        z.object({
          node: z.object({
            id: z.string(),
            slug: z.string(),
            title: z.string(),
            excerpt: z.string(),
            date: z.string(),
            modified: z.string(),
            featuredImage: z.object({
              node: z.object({
                sourceUrl: z.string(),
                sizes: z.string(),
                caption: z.string().nullable(),
              }),
            }),
            categories: z.object({
              edges: z.array(
                z.object({
                  node: z.object({
                    id: z.string(),
                    slug: z.string(),
                    name: z.string(),
                  }),
                })
              ),
            }),
            tags: z.object({
              edges: z.array(
                z.object({
                  node: z.object({
                    id: z.string(),
                    slug: z.string(),
                    name: z.string(),
                  }),
                })
              ),
            }),
          }),
        })
      ),
      pageInfo: z.object({
        hasPreviousPage: z.boolean(),
        hasNextPage: z.boolean(),
        startCursor: z.string().nullable(),
        endCursor: z.string().nullable(),
      }),
    }),
  }),
  extensions: z.object({
    debug: z.array(z.object({ type: z.string(), message: z.string() })),
  }),
});
