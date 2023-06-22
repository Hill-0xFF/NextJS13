import Link from "next/link"
import type { Metadata } from "next"
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is something to think about',
}

export default function About() {
  return (
    <div className={styles.divAbout}>
    <h1>About Page</h1>
    <Link href='/'>Link to HomePage</Link>
    </div>
    
  )
}
