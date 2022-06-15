import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import React from "react";
import { useState } from 'react';
// reactstrap components
import { Button, Card, Collapse,CardBody , Row , Col } from "reactstrap";

export async function getServerSideProps  (context){
   
    const jsondata = await fetch('https://xivapi.com/freecompany/9237023573225242696');
    const data = await jsondata.json() 
    return ({ props : { data } })
}
function members({data }){
    const [collapseOpen, setCollapseOpen] = UseState(false);
    const [collapseOpenSeek, setCollapseOpenSeek] = UseState(false);

    
    

    const pagintate=(array,pagesize,pagenumber)=>{
        return array.slice((pagenumber-1)*pagesize,pagenumber*pagesize);
    }
    
    const firstrowseeker = pagintate(data.FreeCompany.Focus,3,1)
    const secondrowseeker = pagintate(data.FreeCompany.Focus,3,2)
    const thirdrowseeker = pagintate(data.FreeCompany.Focus,3,3)

    return (

        <div className={styles.container}>
                    <Head>
                    <title>About zzZ Fc</title>
                    </Head>
                    <main className="mt-4 p-5 bg-dark  rounded">
 <div className="mt-4 p-5 bg-primary text-white rounded  ">
           
           <Row>
                <Col>Free Company Name</Col>
                <Col><span className="material-symbols-outlined">home</span></Col>
           </Row>
        
        <div className=" row mt-4 p-5 bg-success text-white rounded ">
        <Col>{data.FreeCompany.Name}</Col>
        <Col>{data.FreeCompany.Estate.Plot}</Col>
        <Col>{data.FreeCompany.Estate.Name}</Col>
        </div>
        </div>
        <div className='row gap-2'>
        <div className=" col mt-4 p-5 bg-light text-black rounded ">

            <Row>
                <Col >Active Members </Col>
                <Col >Rank</Col>
            </Row>

        <Row>
        <Col >{data.FreeCompany.ActiveMemberCount}</Col>
        <Col >{data.FreeCompany.Rank}</Col>
        </Row>

        </div>

        <div className=" col mt-4 p-5 bg-light text-black rounded ">
            
            <Row>

                <Col  className="col">Monthly Standing</Col>
                <Col  className="col">Weekly Standing</Col>
            </Row>

        <Row>

        <Col  className="col">{data.FreeCompany.Ranking.Monthly}</Col>
        <Col  className="col">{data.FreeCompany.Ranking.Weekly}</Col>
        </Row>
        
        </div>
        </div>
    <Row>
    <Col>
        <Card  className=" row mt-4 p-5 bg-dark  rounded  ">
        <Button
          color="primary"
          href="#Reputation"
          onClick={() => {
            setCollapseOpen(!collapseOpen);
          }}
        >Reputation</Button>

        
            <Collapse isOpen={collapseOpen} aria-labelledby="Rep" id="Reputation">

                    <CardBody className=" row mt-4 p-5 bg-primary text-white  rounded  ">

                    <Row>
                    {data.FreeCompany.Reputation.map(rep=><Col xs="auto" key={rep.Name} className="col">{rep.Name}  :  {rep.Rank} </Col>)}
                    </Row>

                    </CardBody>

            </Collapse>
        </Card>
    </Col>
    <Col>
        <Card  className=" row mt-4 p-5 bg-dark  rounded  ">
        <Button
          color="danger"
          href="#Seek"
          onClick={() => {
            setCollapseOpenSeek(!collapseOpenSeek);
          }}
        >Focus!!</Button>

        
            <Collapse isOpen={collapseOpenSeek} aria-labelledby="Rep" id="Seek">

                    <CardBody>
        <div className=" row mt-4 p-5 bg-danger text-white rounded ">


    <Row>
    {firstrowseeker.map(seek=><Col  key={seek.Name} className="col"><Image alt={seek.Name} className="col"  width={32} height={32}  src={seek.Icon}></Image> {seek.Name} </Col>)}

    </Row>



    <Row>
    {secondrowseeker.map(seek=><Col  key={seek.Name} className="col"><Image className="col" alt={seek.Name}  width={32} height={32} src={seek.Icon}></Image> {seek.Name}</Col>)}

    </Row>



    <Row>
    {thirdrowseeker.map(seek=><Col  key={seek.Name} className="col"><Image className="col" alt={seek.Name} width={32} height={32}  src={seek.Icon}></Image> {seek.Name}</Col>)}

    </Row>
</div>
</CardBody>
</Collapse>
</Card>
</Col>
</Row>
<h1 className='text-white text-center'> Seeking </h1>
<div className=" row mt-4 p-5 bg-secondary text-white rounded    ">
        <Row>
        {data.FreeCompany.Seeking.map(seek=><Col  key={seek.Name} className="col">{seek.Name}</Col>)}
</Row>

    <Row>
    {data.FreeCompany.Seeking.map(seek=><Col key={seek.Name} className="col"><Image className="col" alt='' width={32} height={32} src={seek.Icon}></Image></Col>)}
    </Row>
</div>
</main>
        </div>
    )
}


export default members
