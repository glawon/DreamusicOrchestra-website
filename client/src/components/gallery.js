import React, {Component} from 'react';
import gallery1 from "../externals/gallery1.jpg";
import gallery2 from "../externals/gallery2.jpg";

class Gallery extends Component{
    render(){
        return(
            <>
            <h1 className="header">Gallery</h1>
            <div id="galleryCarousel" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{justifyContent:"center"}}>
                    <img src={gallery1} className="d-block w-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={gallery2} className="d-block w-50" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </>
        );
    }
}

export default Gallery;