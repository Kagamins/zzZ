import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Client, Intents } from 'discord.js/src/index'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
export async function getServerSideProps(context){
      const prisma = new PrismaClient()
      const client = new Client({
      intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION','EVENTS'],
  });
    prisma.$connect().then(async ()=>{client.login(process.env.DISCORD_TOKEN)
  })
    client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const screenieChannel =  client.channels.fetch('763166630778896395')
    const fetchedmessages =  screenieChannel.then(channel => channel.messages.fetch({ limit: 5}))
    fetchedmessages.then(messages => messages.map(msg=>msg.attachments.map(async (cxt ,i)=>{
      await prisma.Picture.create({
        data:{
          link:cxt.attachment,},}).catch(console.error)
    }))).catch(console.error).finally();
});
const data = await prisma.Picture.findMany().catch((e) => {throw e}).finally(async () => {await prisma.$disconnect()})

 return { props : {data} }

}
export default function Gallery(data){ 
    return(
    <div className='container p-5 '>
            <Head>
        <title>zzZ Fc</title>
        </Head>
    <h1 className={styles.title}> Gallery <span className="material-symbols-outlined">photo_library</span> </h1>
    

    <div className="row">
  {data.data.map(d=><div className='col-md-auto' key={d.id} ><Image className='d-block w-100'  src={d.link} width={1920} height={1080}  alt=''></Image></div>)}
  </div>

    </div>
    )


}


