const baseUrl = process.env.PRIVATE_WORDPRESS_API_URL ?? "";

export async function fetchApi<Type = unknown>(
  input: string | URL | Request,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${baseUrl}${input}`, {
    ...init,
  });
  const result = await data.json();
  return result as Type;
}
