import Link from "next/link"
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.divAbout}>
    <h1>About Page</h1>
    <Link href='/'>Link to HomePage</Link>
    </div>
    
  )
}
