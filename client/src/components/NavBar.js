import RegForm from './regForm';

function NavBar(){

    let login= false;
    function handleClick(){
        if(!login)
        {
            return(
                <RegForm/>
            );
        }
    }

    function handleClickCart(){
        alert("You have to log-in first!");
    }

    /*function showLogin(){
        if(login == false)
            return(
                <a className="btn btn-primary" href="#login" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick={handleClick} style={{backgroundColor:"#e3841f", border: "#e3841f", borderRadius: '5px', color:"black" }}>Log-in</a>);
        else
            return(
                <a className="btn btn-primary" href="#login" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick={handleClick} style={{backgroundColor:"#e3841f", border: "#e3841f", borderRadius: '5px', color:"black" }}>Log-out</a>
            );
    }*/

    return(
        <nav id="navigation" className="navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" data-to-scrollspy-id="first" href="">Dreamusic Orchestra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" data-to-scrollspy-id="second">Chi siamo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery" data-to-scrollspy-id="third">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#events">Eventi e biglietti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cart">
                                <i className="bi bi-cart2" onclick={handleClickCart}></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            {/*showLogin*/}
                            <a className="btn btn-primary" href="#login" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick={handleClick} style={{backgroundColor:"#e3841f", border: "#e3841f", borderRadius: '5px', color:"black" }}>Log-in</a>;
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;