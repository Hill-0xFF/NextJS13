export default async function getUserPosts(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  if (!response.ok) throw new Error('Failed to fetch user!')
  return response.json()
}

