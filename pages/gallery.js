import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import {PrismaClient} from '@prisma/client'

export async function getStaticProps(context){
  const prisma  = new PrismaClient()
  const data = await prisma.Picture.findMany().catch((e) => {throw e}).finally(async () => {await prisma.$disconnect()})
 return { props : {data} }

}
export default function Gallery(data){
    const picmap = Object.values(data.data).reverse();
    console.log(picmap)
    return(
    <div className='container p-5 '>
            <Head>
        <title>zzZ Fc</title>
        </Head>
    <h1 className={styles.title}> Gallery <span className="material-symbols-outlined">photo_library</span> </h1>
    

    <div className="row">
  {picmap.map(d=><div className='col-md-auto' key={d.id} ><Image className='d-block w-100'  src={d.link} width={1920} height={1080}  alt=''></Image></div>)}
  </div>

    </div>
    )


}


