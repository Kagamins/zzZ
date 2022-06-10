import styles from '../styles/Home.module.css'
import Head from 'next/head'
export default function Events(){
    return(<>
            <Head>
        <title>zzZ Fc</title>
        </Head>
    <h1 className={styles.title}>Event Listing <span className="material-symbols-outlined lg">calendar_month</span></h1>
            </>)
}