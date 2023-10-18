import Link from 'next/link';
import { Inter } from 'next/font/google';

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 10;

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p>
        <Link href={'/users'}>Users</Link>
        <h2>{'Brother Right Here'}</h2>
      </p>
    </main>
  )
}

// require('crypto').randomBytes(16).toString('hex')
// 'cc1ca7334e37add483b50e549ae15972'
