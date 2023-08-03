import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import NavBar from './components/NavBar';
import Bio from './components/bio';
import EventsBar from './components/eventsBar';
import BottomBar from './components/bottomBar';
import React, {useEffect, useState} from 'react';

function App() {
  const [backendData, setBackendData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
    .then( (response) => response.json())
    .then( (data) => { setBackendData(data)})
  }, []);




  return (
    //controllo dal back-end: loading fin quando non è arrivato tutto OPPURE progression nelle immagini degli eventi finché non arriva il messaggio
    <>
      <div className="page">
        <NavBar />
        <div className="container text-center">
          <img src="https://cdn.pixabay.com/photo/2016/04/09/16/10/vintage-1318361_1280.jpg" className="img-fluid" style={{width:45+'rem'}}/>
        </div>
        <hr/>
        <Bio />
        <hr/>
        <EventsBar />
        <hr/>
        <BottomBar />
      </div>
      
    </>
  );
}

export default App;
