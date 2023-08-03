import React, {Component} from 'react';
class BottomBar extends Component{
    render(){
        return(
            <div className="row row-col-auto justify-content-center align-items-center" style={{backgroundColor:"black"}}>
                <div className="col-3">
                    <img src={this.props.logo} className="img-fluid" style={{width:20+'rem'}}/>
                </div>
                <div className="col-2 text-center">
                    <h5 className="title">Contatti:</h5>
                    <button type="button" className="btn btn-link" style={{color:"#e3841f"}}>groupname@mail.com</button>
                    <br/>
                    <button type="button" className="btn">
                        <i className="bi bi-facebook" style={{color:"#e3841f"}}></i>
                    </button>
                    <button type="button" className="btn">
                        <i className="bi bi-instagram" style={{color:"#e3841f"}}></i>
                    </button>
                    <button type="button" className="btn">
                        <i className="bi bi-youtube"style={{color:"#e3841f"}}></i>
                    </button>
                </div>
                <span className="text-center" align-center="true" style={{color:"#b4abab", fontSize:0.8+'rem', paddingTop:'20px'}}>Designed and developed by Adriana Cannata and Diletta Moscatt</span>
            </div>
        );
    }
}

export default BottomBar;