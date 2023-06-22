import type { Metadata } from 'next';
import Link from 'next/link';
import getAllUsers from '../lib/getAllUsers';

import style from './page.module.css'

export const metadata: Metadata = {
  title: 'User Page',
  description: 'A simple list of users from JSONPlaceholder',
};

export default async function Users() {
  const usersData: Promise<IUsersData[]> = getAllUsers();
  const users = await usersData;
  console.log('Hello this is a server component!!!');
  
  const content = (
    <section className={style.main}>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name} </Link>
            </p>
            <br />
          </>
        );
      })}
      <h2><Link href='/'>Back to Home</Link></h2>
    </section>
  );
  return content;
}
