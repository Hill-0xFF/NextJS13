import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: 'User Page'
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
