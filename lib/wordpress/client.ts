const API = process.env.WORDPRESS_API!;

export async function wpFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const res = await fetch(`https://api.brimbus.com/wp-json${endpoint}`, {
    ...options,
    next: {
      revalidate: 300, // Cache for 60 seconds
    },
  });

  if (!res.ok) { 
    throw new Error(`WordPress API Error: ${res.status}`);
  }

  return res.json();
}
console.log("API:", process.env.WORDPRESS_API);