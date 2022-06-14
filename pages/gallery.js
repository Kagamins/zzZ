import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import {PrismaClient} from '@prisma/client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export async function getStaticProps(context){
  const prisma  = new PrismaClient()
  const data = await prisma.Picture.findMany().catch((e) => {throw e}).finally(async () => {await prisma.$disconnect()})
 return { props : {data} }

}
export default function Gallery(data){
    const picmap = Object.values(data.data).reverse();

  return(
    <div className={styles.container}>
            <Head>
        <title>zzZ Fc</title>
        </Head>
    <h1 className={styles.title}>  <span className="material-symbols-outlined">photo_library</span> </h1>
    


    <Carousel className="carousel-inner">

  {picmap.map(d=><div  key={d.id} ><Image className='d-block w-100'  src={d.link} width={1920} height={1080}  alt=''></Image></div>)}
  </Carousel>


    </div>
    )


}


