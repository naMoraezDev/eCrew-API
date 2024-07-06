import { z } from "zod";

export const categorySchema = z.object({
  data: z.object({
    category: z.object({
      id: z.string(),
      slug: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      extraFields: z.object({
        isEditorial: z.boolean(),
        isHome: z.boolean(),
        featuredPosts: z
          .array(
            z.object({
              data: z.object({
                post: z.object({
                  id: z.string(),
                  slug: z.string(),
                  title: z.string(),
                  excerpt: z.string(),
                  featuredImage: z.object({
                    node: z.object({
                      sourceUrl: z.string(),
                      sizes: z.string(),
                      caption: z.string().nullable(),
                    }),
                  }),
                  date: z.string(),
                  modified: z.string(),
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
              extensions: z.object({
                debug: z.array(
                  z.object({ type: z.string(), message: z.string() })
                ),
              }),
            })
          )
          .nullable(),
      }),
    }),
  }),
  extensions: z.object({
    debug: z.array(z.object({ type: z.string(), message: z.string() })),
  }),
});
