function BottomBar(){
    return(
        <div className="row justify-content-center align-items-center" style={{backgroundColor:"black"}}>
            <div className="col-2">
                <img src="https://cdn.pixabay.com/photo/2016/04/09/16/10/vintage-1318361_1280.jpg" className="img-fluid" style={{width:20+'rem'}}/>
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
            <br/> <br/>
            <span className="text-center" align-center="true" style={{color:"white", fontSize:0.8+'rem'}}>Designed and developed by Adriana Cannata and Diletta Moscatt</span>
        </div>
    );
}

export default BottomBar;