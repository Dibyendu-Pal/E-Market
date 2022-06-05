import React from 'react'

export default function CarouselImages(props) {
    return (
        props.images.length > 0 &&
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride='carousel' touch='true'>
            <div className="carousel-indicators">
                {props.images.map(image => {
                    if (props.images[0] === image) {
                        return (
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={props.images.indexOf(image)}></button>
                        )
                    } else {
                        return (
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${props.images.indexOf(image)}`} aria-label={`Slide ${props.images.indexOf(image)}`} key={props.images.indexOf(image)}></button>
                        )
                    }
                })}
            </div>
            <div className="carousel-inner">
                {props.images && props.images.map(image => {
                    if (props.images[0] === image) {
                        return (
                            <div className="carousel-item active" key={props.images.indexOf(image)}>
                                <img src={image} className="d-block w-100" alt="" />
                            </div>
                        )
                    } else {
                        return (
                            <div className="carousel-item" key={props.images.indexOf(image)}>
                                <img src={image} className="d-block w-100" alt="" />
                            </div>
                        )
                    }
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
