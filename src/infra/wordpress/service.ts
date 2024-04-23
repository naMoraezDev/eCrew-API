import { fetchApi } from "../../app/utils/fetch-api";

export const WordpressService = {
  async getPostsByCategory(categorySlug: string) {
    const test = await fetchApi(`/posts?category=${categorySlug}`);
    return test;
  },
};
