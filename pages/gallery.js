import styles from '../styles/home.module.css'
import Head from 'next/head'
export default function Gallery(){
    return(
    <>
            <Head>
        <title>zzZ Fc</title>
        </Head>
    <h1 className={styles.title}> Gallery <span className="material-symbols-outlined">photo_library</span> </h1>
    </>
    )
}