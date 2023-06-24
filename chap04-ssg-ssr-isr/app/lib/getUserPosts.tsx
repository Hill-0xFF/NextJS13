export default async function getUserPosts(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, { next: {revalidate: 60}})
  if (!response.ok) return undefined
  return response.json()
}

