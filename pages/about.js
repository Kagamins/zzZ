import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import React from "react";
import { useState } from 'react';
// reactstrap components
import { Button, Card, Collapse, CardBody , Row , Col } from "reactstrap";

export async function getServerSideProps  (context){
   
    const jsondata = await fetch('https://xivapi.com/freecompany/9237023573225242696');
    const data = await jsondata.json() 
    return ({ props : { data } })
}
function members({data }){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [collapseOpen, setCollapseOpen] = useState(false);
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [collapseOpenSeek, setCollapseOpenSeek] = useState(false);

    
    

    // const pagintate=(array,pagesize,pagenumber)=>{
    //     return array.slice((pagenumber-1)*pagesize,pagenumber*pagesize);
    // }
    


    return (

        <div className={styles.container}>
                    <Head>
                    <title>About zzZ Fc</title>
                    </Head>
                    <main className="mt-4 p-5 bg-dark flex  rounded">
           <table className='table table-secondary table-hover table-responsive-md  '>
            <thead>
                <tr>
                <td className='text-centered'>Free Company </td>
                <td className='text-centered'><span className="material-symbols-outlined">home</span></td> 


                </tr>
                </thead>
                <tbody>
                <tr className='container-fluid'> 
                <td  className='text-centered'>{data.FreeCompany.Estate.Name}</td>

                 <td  className='text-centered'>{data.FreeCompany.Estate.Plot}</td>
                </tr>
                </tbody>
                </table>

        
    
        <Row className='row gap-4'>
        <Col className=" col mt-4 p-5 bg-light text-black rounded ">

            <Row>
                <Col >Active Members </Col>
                <Col >Rank</Col>
            </Row>

        <Row>
        <Col >{data.FreeCompany.ActiveMemberCount}</Col>
        <Col >{data.FreeCompany.Rank}</Col>
        </Row>

        </Col>

        <Col className=" col mt-4 p-5 bg-light text-black rounded ">
            
            <Row>

                <Col  className="col">Monthly Standing</Col>
                <Col  className="col">Weekly Standing</Col>
            </Row>

        <Row>

        <Col  className="col">{data.FreeCompany.Ranking.Monthly}</Col>
        <Col  className="col">{data.FreeCompany.Ranking.Weekly}</Col>
        </Row>
        
        </Col>
        </Row>
    
   
 

</main>
        </div>
    )
}


export default members
