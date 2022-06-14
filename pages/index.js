import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
        <title>zzZ Fc</title>
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to zzZ
        </h1>
        <Image alt='fc logo' height={128} width={128} src="https://img2.finalfantasyxiv.com/c/S72_e05652dbe3ba6748157c03c6bd54d4a5_02_128x128.png"></Image>


        
      </main>


    </div>
  )
}
