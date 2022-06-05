import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import image1 from '.../public/Images/download.jpg'
// import image2 from '.../public/Images/minimal-landscape-sunrise-4k-jy.jpg'
// import image3 from '.../public/Images/sunrise-vasco-da-gama-bridge-lisbon-portugal.jpg'
// import image1 from '/download.jpg'
// import image2 from '/minimal-landscape-sunrise-4k-jy.jpg'
// import image3 from '/Images/sunrise-vasco-da-gama-bridge-lisbon-portugal.jpg'
import { Link } from 'react-router-dom';
import JsonData from './data.json'

export default function SlidingCards() {

    // For making Owl Carousel Responsive
    const responsive = {
        0: {
            items: 1,
            nav: true
        },
        610: {
            items: 2,
            nav: true
        },
        900: {
            items: 3,
            nav: false
        },
        1250: {
            items: 4,
            nav: true,
        }
    }

    // const cards = JsonData.slidingCards
    const cards = JsonData.items.filter(item => item.slidingCards)

    return (

        <OwlCarousel className='owl-theme mt-2' loop margin={10} nav autoplay={true} responsiveClass={true} responsive={responsive} style={{backgroundColor: '#0dcaf0', paddingTop: "50px"}}>
            {cards.map((card) => {
                return (
                        <Link to={`/item/${card.id}`} key={card.id} style={{textDecoration: "none", color: 'black', padding: "10px 0px"}}>
                            <div className='item hover'>
                                <div className="card mx-auto mx-4" style={{ width: "18rem"}}>
                                    {/* <Link to="/items"> */}
                                    <img src={card.image[0]} className="card-img-top" alt="..." style={{height: "12rem", objectFit: "contain", paddingTop: "10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <h2>₹{card.price}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                )
            })}
        </OwlCarousel>
    )
}
