import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {Client,Intents} from 'discord.js/src/index'
import {PrismaClient} from '@prisma/client'
import {GetServerSideProps} from 'next'
import Image from 'next/image'
export async function getServerSideProps(context) {
    const prisma = new PrismaClient()
    const client = new Client({
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        ],
        partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'EVENTS'],
    });
    prisma.$connect().then(async () => {
        client.login(process.env.DISCORD_TOKEN)
    })
    client.on('ready', async () => {
        console.log(`Logged in as ${client.user.tag}!`);
        const fc = client.guilds.fetch('74526559620308992')
        const events = fc.then(guild => guild.scheduledEvents.fetch({limit: 5}))
        events.then(even =>  
        even.map(async (e,i) => {
            
            
           const g = await prisma.Event.create({
                data: {
                    name: e.name,
                    due_date:  e.scheduledStartTimestamp,
                    description: e.description,
                    image: e.image,
                    special: e.id,
                },
            });
        }))
    });
    const data = await prisma.Event.findMany()

    return {
        props: {data}
    }

}
export default function Events(data) {
    data.data.map(e=>{console.log(e.name)})
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
                {data.data.map(event=><tr key={event.special}><td>{event.name}</td><td>{event.description}</td><td>{event.due_date}</td></tr>)}

            </tbody>
        </table>
        </>)
    }