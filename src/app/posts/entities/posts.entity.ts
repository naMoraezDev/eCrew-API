import { PostFactory } from "../../utils/posts-factory";
import WordpressService from "../../../infra/wordpress/service";

export class PostsEntity {
  private slug: string;
  private categorySlug: string;

  constructor(categorySlug: string | null, slug: string | null) {
    this.slug = slug || "";
    this.categorySlug = categorySlug || "";
  }

  async getPostsByCategory() {
    const postListResponse = await WordpressService.getPostsByCategory(
      this.categorySlug
    );
    const postList = new PostFactory().formatPostListData(postListResponse);
    return postList;
  }

  async getPostBySlug() {
    const postResponse = await WordpressService.getPostBySlug(this.slug);
    const post = new PostFactory().formatPostData(postResponse);
    return post;
  }
}
