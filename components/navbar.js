export default function Navbar(){
    return(
    <nav className="navbar  navbar-expand-lg bg-dark ">
    <div className="container-fluid">
    <a className="btn btn-primary" aria-current="page" href="./"><span className="material-symbols-outlined">home</span></a>
    <a className="btn btn-warning" href="../gallery"><span className="material-symbols-outlined">photo_library</span></a>
    
    <a className="btn btn-danger " href="../events"><span className="material-symbols-outlined">calendar_month</span></a>
    <a className="btn btn-secondary" href="../about"><span className="material-symbols-outlined">info</span></a>
</div>
    
    </nav>)
}