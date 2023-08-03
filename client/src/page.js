import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ScrollSpy from "react-ui-scrollspy";
import './Page.css'
import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Bio from './components/bio';
import Evento from './components/evento';
import Musician from './components/musician';
import BottomBar from './components/bottomBar';
import Gallery from './components/gallery';
import logo from "./externals/logo.jpg";
import cardImage from "./externals/locandina.png";

import musician1 from "./externals/violin.png";
import musician2 from "./externals/double-bass.png";
import musician3 from "./externals/trumpet.png";
import musician4 from "./externals/trombone.png";
import musician5 from "./externals/piano.png";
import musician6 from "./externals/drums.png";

class Page extends Component{
  //oggetto Javascript con chiavi che contengono i valori dei singoli elementi da piazzare nella pagina
  state={
    events: [
      {id : 0, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 1"},
      {id : 1, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 2"},
      {id : 2, locandina : cardImage, data : "gg/mm/aaaa", ora : "00:00", nomeConcerto : "concerto 3"}
    ],
    musicians: [
      {id: 0, foto: musician1, nome: "Musician 1", strumento: "Violino"},
      {id: 1, foto: musician2, nome:"Musician 2", strumento: "Contrabbasso"},
      {id: 2, foto: musician3, nome: "Musician 3", strumento: "Tromba"},
      {id: 3, foto: musician4, nome: "Musician 4", strumento: "Trombone"}, 
      {id: 4, foto: musician5, nome: "Musician 5", strumento: "Pianoforte"},
      {id: 5, foto: musician6, nome: "Musician 6", strumento: "Batteria"}
    ]
  }

  renderEvenMusician(musician){
    if(musician.id % 2 == 0)
    {
      return(
        <Musician
          picture={musician.foto}
          noun={musician.nome}
          instrument={musician.strumento}
        />
      )
    }
  }

  renderOddMusician(musician){
    if(musician.id % 2 == 1)
    {
      return(
        <Musician
          picture={musician.foto}
          noun={musician.nome}
          instrument={musician.strumento}
        />
      )
    }
  }

  render(){
    return (
    //controllo dal back-end: loading fin quando non è arrivato tutto OPPURE progression nelle immagini degli eventi finché non arriva il messaggio

    <>
      <div className="page">
        <NavBar />
        <ScrollSpy>
          <h1 id="first"></h1>
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
          <hr className="divider"/>
          <h1 id="second" className="header">Chi siamo</h1>
          <hr/>
          <div className="container text-center">
            <div className="row justify-content-md-center">
                  <div className="col offset-md-1">
                    {this.state.musicians.map(musician=>(
                      this.renderEvenMusician(musician)
                    ))}
                  </div>
                  <div className="col offset-md-1">
                    {this.state.musicians.map(musician=>(
                        this.renderOddMusician(musician)
                      ))}
                  </div>
              </div>
          </div>
          <hr className="divider"/>
          <h1 id="third" className="header">Gallery</h1>
          <Gallery
            slide1={cardImage}
            slide2={musician1}
            slide3={musician3}/>
        </ScrollSpy>
        <hr/>
        <BottomBar
          logo={logo}/>
      </div>
      
    </>
  );
  }
}

export default Page;
