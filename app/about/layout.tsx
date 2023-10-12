import styles from './styles.module.css';
import Head from './head';
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <>
     <nav>
        <h2>My About NavBar</h2>
     </nav>
       <Head/>
        <main className={styles.main}>
            {children}
        </main>
     </>
    )
}
