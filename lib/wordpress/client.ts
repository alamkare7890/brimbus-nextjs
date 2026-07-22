const API = process.env.NEXT_PUBLIC_WORDPRESS_API;

if (!API) {
  throw new Error("WORDPRESS_API environment variable is not set");
}

export async function wpFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${API}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const body = await res.text();

    // console.error("FAILED URL:", url);
    // console.error("STATUS:", res.status);
    // console.error("BODY:", body);

    throw new Error(`WordPress API Error: ${res.status}`);
  }

  return res.json();
}