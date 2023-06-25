type Result = {
  pageId: string,
  title: string,
  extract: string,
  thumbnail?: {
    source: string,
    width: number,
    height: number,
  }
}

type WikiSearchResult = {
  query?: {
    pages?: Result[]
  }
}