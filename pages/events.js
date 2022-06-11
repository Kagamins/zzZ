import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {PrismaClient} from '@prisma/client'
export async function getServerSideProps(context) {
   const prisma = new PrismaClient()
    const data = await prisma.Event.findMany()

    return {
        props: {data}
    }

}
export default function Events(data) {
    const events = Object.values(data.data).reverse();

   return (<>
        <Head>
        <title > zzZ Fc </title> </Head> 
        <h1 className = {styles.title}> Event Listing < span className = "material-symbols-outlined lg" > calendar_month </span></h1 >
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <td>
                    Event Name
                    </td>
                    <td>
                    Description
                    </td>
                    <td>
                    TimeStamp
                    </td>
                </tr>
            </thead>
            <tbody>
                {events.map(event=><tr key={event.special}><td>{event.name}</td><td>{event.description}</td><td>{event.due_date}</td></tr>)}

            </tbody>
        </table>
        </>)
    }