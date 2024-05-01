import { postSchema } from "../../domain/schemas/post/post.schema";
import { postListSchema } from "../../domain/schemas/post/post-list.schema";

interface PostsFormatFactoryProtocol {
  formatPostListData(
    postList: typeof postListSchema._type
  ): typeof postListSchema._type;
  formatPostData(postList: typeof postSchema._type): typeof postSchema._type;
}

export class PostsFormatFactory implements PostsFormatFactoryProtocol {
  public formatPostListData(postList: typeof postListSchema._type) {
    return {
      ...postList,
      posts: postList.posts.map((post) => ({
        ...post,
        categories: Object.keys(post.categories).map(
          (category) => post.categories[category]
        ),
        terms: {
          ...post.terms,
          category: post.terms.category[Object.keys(post.terms.category)[0]],
        },
      })),
    };
  }

  public formatPostData(post: typeof postSchema._type) {
    return {
      ...post,
      categories: Object.keys(post.categories).map(
        (category) => post.categories[category]
      ),
      terms: {
        ...post.terms,
        category: post.terms.category[Object.keys(post.terms.category)[0]],
      },
    };
  }
}
