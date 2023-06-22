import type { Metadata } from 'next';
import Link from 'next/link';
import getAllUsers from '@/lib/getAllUsers';

export const metadata: Metadata = {
  title: 'User Page',
};

export default async function Users() {
  // this is a server component, so it's going to request it as it
  // builds the website/html (Static Generation), it won't request as a
  // request, it'll request at build time
  //
  const usersData: Promise<IUsersData[]> = getAllUsers();
  const users = await usersData;
  console.log('Hello this is a server component!!!');
  

  const content = (
    <section>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
