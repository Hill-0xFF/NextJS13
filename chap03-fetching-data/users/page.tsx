import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: 'User Page'
}

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

export default function Users() {
  // this is a server component, so it's going to request it as it
  // builds the website/html (Static Generation), it won't request as a
  // request, it'll request at build time
  // 
  const usersData: Promise<IUsersData[]> = getAllUsers()
  return (
    <div>page</div>
  )
}
