export default function MiniGames(){
    return(
    
    <form className=" bg-light ">
        <div className="mb-3">
            <div className="d-grid gap-2">
                <label  className="form-label">    Name</label>
                <input id="nickname" type="text" placeholder=" Enter Your NickName" required></input>
                <a className="btn btn-outline-primary  ">Host</a>
            </div>
            <div className="d-grid gap-2">
                <input type="text" placeholder="4 LETTER ROOM CODE"></input>
                <a className="btn btn-outline-danger">Join</a>
            </div>
            
        </div>
    </form>
    )
}