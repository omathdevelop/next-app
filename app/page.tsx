import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, From The Other Side..........</h1>
      <p>This is the hello world kingdom. Here We GO Again.</p>
    </main>
  )
}
