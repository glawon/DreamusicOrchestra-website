function EventsBar(){
    return(
        <div className="container text-center img-fluid">
            <div className="row align-items-center">
                <div className="col justify-content-center">
                    <div className="card" style={{width: 20+'rem'}}>
                        <img src="https://cdn.pixabay.com/photo/2021/03/10/14/57/pianist-6084749_1280.png" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Nome concerto</h5>
                            <p className="card-text">Data: gg/mm/aaaa<br/>Ora: 00.00<br/>Luogo</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor:"#e3841f", border:"#e3841f", color:"black"}}>Acquista</a>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center">
                    <div className="card" style={{width: 20+'rem'}}>
                        <img src="https://cdn.pixabay.com/photo/2021/03/10/14/57/pianist-6084749_1280.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nome concerto</h5>
                            <p className="card-text">Data: gg/mm/aaaa<br/>Ora: 00.00<br/>Luogo</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor:"#e3841f", border:"#e3841f", color:"black"}}>Acquista</a>
                        </div>
                    </div>
                </div>
                <div className="col justfy-content-center">
                    <div className="card" style={{width: 20+'rem'}}>
                        <img src="https://cdn.pixabay.com/photo/2021/03/10/14/57/pianist-6084749_1280.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nome concerto</h5>
                            <p className="card-text">Data: gg/mm/aaaa<br/>Ora: 00.00<br/>Luogo</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor:"#e3841f", border:"#e3841f", color:"black"}}>Acquista</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsBar;