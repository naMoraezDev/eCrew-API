import { PostFactory } from "../../../infra/utils/posts-factory";
import { WordpressService } from "../../../infra/wordpress/service";

export class PostsEntity {
  private slug: string;
  private categorySlug: string;

  constructor(categorySlug: string | null, slug: string | null) {
    this.slug = slug || "";
    this.categorySlug = categorySlug || "";
  }

  public async getPostsByCategory() {
    const postListResponse = await new WordpressService().getPostsByCategory(
      this.categorySlug
    );
    const postList = new PostFactory().formatPostListData(postListResponse);
    return postList;
  }

  public async getPostBySlug() {
    const postResponse = await new WordpressService().getPostBySlug(this.slug);
    const post = new PostFactory().formatPostData(postResponse);
    return post;
  }
}
