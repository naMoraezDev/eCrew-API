import { z } from "zod";

export const postSchema = z.object({
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
      author: z.object({
        node: z.object({
          id: z.string(),
          slug: z.string(),
          name: z.string(),
          firstName: z.string().nullable(),
          lastName: z.string().nullable(),
          nicename: z.string().nullable(),
          description: z.string().nullable(),
          avatar: z.object({
            url: z.string(),
            height: z.number(),
            width: z.number(),
            size: z.number(),
            foundAvatar: z.boolean(),
          }),
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
      editorBlocks: z
        .array(z.object({ name: z.string(), renderedHtml: z.string() }))
        .nullable(),
      content: z.string().nullable(),
    }),
  }),
  extensions: z.object({
    debug: z.array(z.object({ type: z.string(), message: z.string() })),
  }),
});
