import React, {Component} from 'react';
//import cardImage from "../externals/locandina.png";

class Evento extends Component{
    render(){
        return(
            <div className="col justify-content-center">
                    <div className="card mx-auto" style={{width: 20+'rem'}}>
                        <img src={this.props.locandina} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nomeConcerto}</h5>
                            <p className="card-text">Data: {this.props.data}<br/>Ora: {this.props.ora}<br/>Luogo</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor:"#e3841f", border:"#e3841f", color:"black"}}>Acquista</a>
                        </div>
                    </div>
            </div>
        );
    }
}

/*function Evento (){
        return(
            <div className="col justify-content-center">
                    <div className="card mx-auto" style={{width: 20+'rem'}}>
                        <img src={cardImage} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">a</h5>
                            <p className="card-text">Data: <br/>Ora: <br/>Luogo</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor:"#e3841f", border:"#e3841f", color:"black"}}>Acquista</a>
                        </div>
                    </div>
            </div>
        );
}*/

export default Evento;