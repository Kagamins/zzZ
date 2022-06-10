import Image from 'next/image'
import fsPromises from 'fs/promises';
import path from 'path'
import Head from 'next/head';
import Link from 'next/link';
export async function getServerSideProps  (context){
    const filePath = path.join(process.cwd(),'public/fc-data.json');
    const jsondata = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsondata)
    return ({ props : { data } })
}
function members({data }){
    data.FreeCompanyMembers.forEach(element => {
        element.ID = 'https://eu.finalfantasyxiv.com/lodestone/character/'+element.ID
    });
    const pagintate=(array,pagesize,pagenumber)=>{
        return array.slice((pagenumber-1)*pagesize,pagenumber*pagesize);
    }
    
    const firstrowseeker = pagintate(data.FreeCompany.Focus,3,1)
    const secondrowseeker = pagintate(data.FreeCompany.Focus,3,2)
    const thirdrowseeker = pagintate(data.FreeCompany.Focus,3,3)

    return (

        <div className='container p-5'>
                    <Head>
                    <title>About zzZ Fc</title>
                    </Head>
 <table className="table table-dark table-striped  ">
       <thead>
           <tr>
               <td className='text-center'>Housing</td>
               <td className='text-center'>FC Name</td>

           </tr>
       </thead>
        <tbody>
        <tr>
        <td className="text-center">{data.FreeCompany.Estate.Plot}</td>
        <td className="text-center">{data.FreeCompany.Estate.Name}</td>
        </tr>
        </tbody>
        </table>

        <table className="table table-dark table-striped  ">
        <thead>
            <tr>
                <th className="text-center">Active</th>
                <th className="text-center">Rank</th>
                <th className="text-center">Monthly</th>
                <th className="text-center">Weekly</th>
            </tr>
        </thead>
        <tbody>
        <tr>
        <td className="text-center">{data.FreeCompany.ActiveMemberCount}</td>
        <td className="text-center">{data.FreeCompany.Rank}</td>
        <td className="text-center">{data.FreeCompany.Ranking.Monthly}</td>
        <td className="text-center">{data.FreeCompany.Ranking.Weekly}</td>
        </tr>
        </tbody>
        </table>
       
        <table  className="table table-dark table-striped  ">
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
        <table className="table table-dark table-striped  ">
        <thead>
        <tr>
        {firstrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {firstrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image alt=' ' width='50px' height='50px'  src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>
<table className="table table-dark table-striped  ">
        <thead>
        <tr>
        {secondrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {secondrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image alt=' ' width='50px' height='50px'  src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>

<table className="table table-dark table-striped  ">
        <thead>
        <tr>
        {thirdrowseeker.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {thirdrowseeker.map(seek=><td key={seek.Name} className="text-center"><Image alt=' ' width={32} height={32}  src={seek.Icon}></Image></td>)}

    </tr>
</tbody>
</table>

<table className="table table-dark table-striped  ">
        <thead>
        <tr>
        {data.FreeCompany.Seeking.map(seek=><td key={seek.Name} className="text-center">{seek.Name}</td>)}
</tr>
</thead>
<tbody>
    <tr>
    {data.FreeCompany.Seeking.map(seek=><td key={seek.Name} className="text-center"><Image alt='' width={32} height={32} src={seek.Icon}></Image></td>)}
    </tr>
</tbody>
</table>
<table className="table table-dark table-striped  ">
    <thead>
        <tr>
        <td className='text-center'> Avatar </td>
        <td className='text-center'> Name </td>
        <td className='text-center'> Rank </td>
        <td className='text-center'> Icon </td>
        </tr>
    </thead>
    <tbody>
{data.FreeCompanyMembers.map(memeber=>
<tr key={memeber.Name} >
<td className='text-center'><a href={memeber.ID}><Image alt='' width={64} height={64} src={memeber.Avatar}></Image></a></td>
<td className='text-center'>{memeber.Name}</td>
<td className='text-center'>{memeber.Rank}</td>
<td className='text-center'><Image alt='' width={64} height={64} src={memeber.RankIcon}></Image></td>
</tr>
)}
    </tbody>
</table>
        </div>
    )
}


export default members
