import React, {Component} from 'react';

class Gallery extends Component{
    render(){
        return(
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner" style={{widht:"10rem"}}>
                    <div className="carousel-item active">
                    <img src={this.props.slide1} className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                    <img src={this.props.slide2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={this.props.slide3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        );
    }
}

export default Gallery;