'use client'; // client-side logic
import { useEffect } from 'react'
import styles from './page.module.css'


const Error = ({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) => {

  useEffect(() => {
    console.error(error);
    
  }, [error])

  return (
    <div className={styles.divError}>
      <h2>Something went wrong!</h2>
      <button onClick={
        // recovering by trying a re-render
        () => reset()
        }>Try Again</button>
    </div>
  )
}

export default Error;