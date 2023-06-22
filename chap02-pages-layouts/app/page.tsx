import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello NextJS 13 !!!</h1>
      <p>This is just the beginning!!!</p>
      <p>Now fast refresh.... it&rsquo; fast!</p>
    </main>
  )
}
