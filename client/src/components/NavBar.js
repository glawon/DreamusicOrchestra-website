import "./NavBar.css"
import RegForm from './regForm';
import {Link, NavLink} from "react-router-dom";

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
                <NavLink to="/" className="navbar-brand mb-auto">Dreamusic Orchestra</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-auto">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">Chi siamo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/events" className="nav-link">Eventi e biglietti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-link">Shop</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-auto">
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">
                                <i className="bi bi-cart2" onClick={handleClickCart}></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/*showLogin*/}
                            <NavLink to="/login" className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleClick}
                            style={{backgroundColor:"#e3841f", border: "#e3841f", borderRadius: '5px', color:"black" }}>Log-in</NavLink>;
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;