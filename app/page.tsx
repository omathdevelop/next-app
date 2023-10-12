import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Hello, From The Other Side..........</h1>
      <p>This is the hello world kingdom. Here We GO Again.</p>
      <Link href={'/about'}>Go To About Route</Link>
    </main>
  )
}
