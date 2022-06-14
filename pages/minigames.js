import Head from "next/head"
import styles from '../styles/Home.module.css'
export default function MiniGames(){
   
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          nickname: event.target.nickname.value,
          roomcode: event.target.roomcode.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/form'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
      }
   
   
   
   
    return(

    
    <div className={styles.container} >
        <Head>
        <title>zzZ Fc</title>
        </Head>
        <main className="mb-3 p-5">
        <form className="d-grid gap-3" onSubmit={handleSubmit}>
            <div className="d-grid gap-2">
                
                <input id="nickname" type="text" placeholder="    Enter Your NickName" required></input>
            
            
                <input id="roomcode" type="text" placeholder="4 LETTER ROOM CODE"></input>
                <button className="btn btn-outline-danger" type="submit">Play</button>
                </div>
            </form>
        </main>

    </div>
    )
}