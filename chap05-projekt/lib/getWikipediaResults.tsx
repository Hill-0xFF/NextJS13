// export type GetWikiResultsProps = {
//   search: string,
// }

export default async function getWikipediaResults(search: string) {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: search,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  })

  // const response = await fetch(`https://en.wikipedia.org/w/api.php?${search}`)
  const response = await fetch('https://en.wikipedia.org/w/api.php?' + search)
  if (!response.ok) throw new Error('Error while fetching search.')
  return response.json()
}