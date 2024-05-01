import { tagSchema } from "../schemas/tag.schema";
import { postSchema } from "../schemas/post.schema";
import { tagListSchema } from "../schemas/tag-list.shema";
import { categorySchema } from "../schemas/category.schema";
import { postListSchema } from "../schemas/post-list.schema";

export interface WordpressContract {
  getPostsByCategory: (
    categorySlug: string
  ) => Promise<typeof postListSchema._type>;
  getTags: () => Promise<typeof tagListSchema._type>;
  getTagBySlug: (slug: string) => Promise<typeof tagSchema._type>;
  getPostBySlug: (slug: string) => Promise<typeof postSchema._type>;
  getPostsByTag: (tag: string) => Promise<typeof postListSchema._type>;
  getCategoryBySlug: (slug: string) => Promise<typeof categorySchema._type>;
}
