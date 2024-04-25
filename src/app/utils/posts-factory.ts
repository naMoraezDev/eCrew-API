import { postListSchema, postSchema } from "../schemas/posts.schema";

interface PostFactoryInterface {
  formatPostListData(
    postList: typeof postListSchema._type
  ): typeof postListSchema._type;

  formatPostData(postList: typeof postSchema._type): typeof postSchema._type;
}

export class PostFactory implements PostFactoryInterface {
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

  public formatPostData(postList: typeof postSchema._type) {
    return {
      ...postList,
      categories: Object.keys(postList.categories).map(
        (category) => postList.categories[category]
      ),
      terms: {
        ...postList.terms,
        category:
          postList.terms.category[Object.keys(postList.terms.category)[0]],
      },
    };
  }
}
