import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
export async function getServerSideProps  (context){
   
    const jsondata = await fetch('https://xivapi.com/freecompany/9237023573225242696');
    const data = await jsondata.json() 
    return ({ props : { data } })
}
function members({data }){

    
    

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
                    <main className="mb-3 p-5">
 <table className="table table-dark table-striped table-hover  ">
       <thead>
           <tr>
                <td className='text-center'>Free Company Name</td>
                <td className='text-center'><span className="material-symbols-outlined">home</span></td>
                <td className='text-center'><span className="material-symbols-outlined">home</span></td>
           </tr>
       </thead>
        <tbody>
        <tr>
        <td className="text-center">{data.FreeCompany.Name}</td>
        <td className="text-center">{data.FreeCompany.Estate.Plot}</td>
        <td className="text-center">{data.FreeCompany.Estate.Name}</td>
        </tr>
        </tbody>
        </table>

        <table className="table table-dark table-striped table-hover ">
        <thead>
            <tr>
                <th className="text-center">Active Members </th>
                <th className="text-center">Rank</th>
            </tr>
        </thead>
        <tbody>
        <tr>
        <td className="text-center">{data.FreeCompany.ActiveMemberCount}</td>
        <td className="text-center">{data.FreeCompany.Rank}</td>

        </tr>
        </tbody>
        </table>
        <table className="table table-dark table-striped table-hover ">
        <thead>
            <tr>

                <th className="text-center">Monthly Standing</th>
                <th className="text-center">Weekly Standing</th>
            </tr>
        </thead>
        <tbody>
        <tr>

        <td className="text-center">{data.FreeCompany.Ranking.Monthly}</td>
        <td className="text-center">{data.FreeCompany.Ranking.Weekly}</td>
        </tr>
        </tbody>
        </table>


        <table  className="table table-dark table-striped table-hover  ">
        <thead>
            <tr>
            {data.FreeCompany.Reputation.map(rep=><th key={rep.Name} className="text-center">{rep.Name}</th>)}
            </tr>
        </thead>
        <tbody>
        <tr>
        {data.FreeCompany.Reputation.map(rep=><td key={rep.Name} className="text-center">{rep.Rank}</td>)}
        </tr>
        </tbody>
        </table>
        <table className="table table-dark table-striped table-hover ">
        <thead>
        <tr>
        {firstrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {firstrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image alt=' ' className="text-center"  width={32} height={32}  src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>
<table className="table table-dark table-striped table-hover  ">
        <thead>
        <tr>
        {secondrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {secondrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image className="text-center" alt=' '  width={32} height={32} src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>

<table className="table table-dark table-striped table-hover  ">
        <thead>
        <tr>
        {thirdrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {thirdrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image className="text-center" alt=' ' width={32} height={32}  src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>

<table className="table table-dark table-striped table-hover    ">
        <thead>
        <tr>
        {data.FreeCompany.Seeking.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {data.FreeCompany.Seeking.map(seek=><td key={seek.Name} className="text-center"><Image className="text-center" alt='' width={32} height={32} src={seek.Icon}></Image></td>)}
    </tr>
</tbody>
</table>
</main>
        </div>
    )
}


export default members
