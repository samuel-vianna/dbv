import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cidade Canção</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1> Em Breve</h1>
        <img src='/logo-clube.jpg' alt='logo clube' id={styles.logo} />
      </main>

      <footer className={styles.footer}>
        Desenvolvido por Samuel Vianna Quintanilha
      </footer>
    </div>
  )
}
