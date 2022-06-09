export default function Navbar(){
    return(
    <nav className="navbar  navbar-expand-lg bg-dark">
    <div className="container-fluid">
  <li className="nav-item">
    <a className="btn btn-primary" aria-current="page" href="./"><span className="material-symbols-outlined">home</span></a>
  </li>
  <li className="nav-item">
    <a className="btn btn-warning" href="../gallery"><span className="material-symbols-outlined">photo_library</span></a>
  </li>
  <li className="nav-item">
    <a className="btn btn-warning" href="../about"><span className="material-symbols-outlined">diversity_3</span></a>
  </li>
  <li className="nav-item">
    <a className="btn btn-danger " href="../events"><span className="material-symbols-outlined">calendar_month</span></a>
  </li>
  <li className="nav-item">
    <a className="btn btn-danger " href="../minigames"><span className="material-symbols-outlined">interests</span></a>
  </li>
</div>
    
    </nav>)
}