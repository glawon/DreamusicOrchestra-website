import React, {Component} from 'react';
import Bio from './bio';
import Evento from './evento';
import logo from "../externals/logo.jpg";
import cardImage from "../externals/locandina.png";

class Home extends Component{
    state={
        events: [
          {id : 0, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 1"},
          {id : 1, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 2"},
          {id : 2, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 3"}
        ]
    }
    
    render(){
        return(
            <>
                <div className="container text-center">
                    <img src={logo} className="img-fluid" style={{width:45+'rem'}}/>
                </div>
                <hr className="divider"/>
                <Bio />
                <hr className="divider"/>
                <div className="container">
                    <div className = "row align-text-center">
                    {this.state.events.map(event => (
                        //creo automaticamente tanti componenti quanto quelli definiti in state
                        <Evento
                        key={event.id}
                        locandina={event.locandina}
                        data={event.data}
                        ora={event.ora}
                        nomeConcerto={event.nomeConcerto}/>
                    ))}
                    </div> 
                </div>
          </>
        )
    }
}

export default Home;