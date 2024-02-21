import React from 'react'
import NavIcons from './NavIcons';
import rocket from './assets/Images/charm_rocket.svg';
function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbarmine  navbar-${props.mode} bg-${props.mode}`} style={{'height':'8vh'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <span><img src={rocket} alt='logo' style={{ filter: props.mode==='light' ? 'invert(100%)' : 'invert(0)'}} /></span>AstroWorld</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/project">Projects</a>
                </li>
               
                <li className="nav-item">
                <a className="nav-link" href="/" >Disabled</a>
                </li>
            </ul>
            <form className="d-flex">
              
                <NavIcons changeMode={props.changeMode} mode={props.mode}/>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default NavBar