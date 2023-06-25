import getWikipediaResults from '../../lib/getWikipediaResults'

type Props = {
  params: {
    search: string,
  }
}

export default async function SearchResults({params: {
  search
}}: Props) {

  const wikipediadata: Promise<WikiSearchResult> = getWikipediaResults(search)
  const data = await wikipediadata
  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {
        results ? Object.values(results).map(result => {
          return <p key={result.pageId}>{JSON.stringify(result)}</p>
        })
          : <h2 className='p-2 text-xl' >{
            `${search} not found.` 
            }</h2>
      }
    </main>
  )
  return content;
}