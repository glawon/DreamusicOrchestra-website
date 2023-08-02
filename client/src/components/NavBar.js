
function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dreamusic Orchestra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" style={{color:"#e3841f"}}>
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Chi siamo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Eventi e biglietti</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-cart2"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary" style={{backgroundColor:"#e3841f", border: "#e3841f", color:"black"}} href="#">Accedi</a>
                    </li>
                </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;