const API = process.env.WORDPRESS_API!;
export async function wpFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${process.env.WORDPRESS_API}${endpoint}`;

  console.log("Fetching:", url);

  const res = await fetch(url, options);

  if (!res.ok) {
    const body = await res.text();

    console.error("FAILED URL:", url);
    console.error("STATUS:", res.status);
    console.error("BODY:", body);

    throw new Error(`WordPress API Error: ${res.status}`);
  }

  return res.json();
}