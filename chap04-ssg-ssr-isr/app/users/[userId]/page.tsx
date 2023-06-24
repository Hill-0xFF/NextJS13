import Link from 'next/link';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import getUser from '../../lib/getUser';
import getUserPosts from '../../lib/getUserPosts'
import getAllUsers from '@/app/lib/getAllUsers';
import { notFound } from 'next/navigation'

const metadata: Metadata = {
  title: 'User Posts',
  description: 'All user posts from typicode.'
}

interface Params {
  params: {
    userId: string;
  };
}

export const generateMetadata = async ({
  params: {
    userId,
  }
}: Params):Promise<Metadata> => {
  const userData: Promise<IUsersData> = getUser(userId)
  const user = await userData
  if (!user.name) {
    return {
      title: 'User Not Found',
      description: `This is the page of ${user.name}`
    }
  }
  return {
    title: user.name,
    description: `Page of ${user.name}`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<IUsersData> = getUser(userId);
  const userPostsData: Promise<IPostData[]> = getUserPosts(userId)
  
  // const [user, userPosts] = await Promise.all([
  //   userData,
  //   userPostsData
  // ])
  const user = await userData

  const content = (
    <section>
      <h2>
        <Link href="/">{user.name}</Link>
        <br />
        <Link href='/'>Go to Homepage</Link>
      </h2>
      <Suspense fallback={
        <h2>Loading data...</h2>
      }>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
      
    </section>
  );

  return content;
}

export async function generateStaticParams() {
  const usersData: Promise<IUsersData[]> = getAllUsers()
  const users = await usersData
  
  return users.map( user => (
    {
      userId: user.id.toString()
    }
  ))
}