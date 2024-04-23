import WordpressService from "../../../infra/wordpress/service";

class PostsEntity {
  private slug: string;
  private categorySlug: string;

  constructor(categorySlug: string | null, slug: string | null) {
    this.slug = slug || "";
    this.categorySlug = categorySlug || "";
  }

  async getPostsByCategory() {
    const postList = await WordpressService.getPostsByCategory(
      this.categorySlug
    );
    return postList;
  }

  async getPostBySlug() {
    const post = await WordpressService.getPostBySlug(this.slug);
    return post;
  }
}

export default PostsEntity;
