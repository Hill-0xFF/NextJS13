import style from './UserPosts.module.css'

interface UserPostProps {
  promise: Promise<IPostData[]>,
}

export default async function UserPosts({
  promise
}: UserPostProps) {

  const posts = await promise

  const content = posts.map((post) => {
    return(
      <article key={post.id} className={style.article}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    )
  })
  return content
}
