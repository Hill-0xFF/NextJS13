'use client';

import { useEffect } from 'react'
import type { Metadata } from "next"

import style from './page.module.css'

const metadata: Metadata = {
  title: 'USER PAGE ERROR',
  description: 'Something went wrong on /users/',
}

export default function Error({
  error,
  reset
}: {
  error: Error,
  reset: () => void,
}) {

  useEffect(() => {
    console.error(error);
    
  }, [error])
  return (
    <div className={style.main}>
      <h2>Something went wrong on /users/</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}
