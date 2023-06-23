interface IUsersData {
  id: number,
  name: string,
  email: string,
  address:{
    street: string,
    suite: string,
    zipcode: number | string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

interface IPostData {
  userId: number,
  id: number,
  title: string,
  body: string
}