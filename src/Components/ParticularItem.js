import React from 'react'
import { Link, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import CarouselImages from './CarouselImages';
import JsonData from './data.json'
import ItemHighlights from './ItemHighlights';

export default function ParticularItem() {
  let { id } = useParams();
  const item = (JsonData.items.filter(card => card.id == id))[0]
  // {
  //   (Object.keys(item.details).map(element => console.log(item.details[element])))
  // }

  console.log(id);

  return (
    <div id='grid' className='full-height'>
      <div className='d-flex justify-content-center align-items-center ' style={{ backgroundColor: 'white' }}>
        <div>
          <div>
            <CarouselImages images={item.image} />
          </div>
          <div className='row' id='buyDivInSplit' style={{ position: 'absolute',left: "0px", bottom: "0px", width: "50%"}}>
            <div className="col text-center py-2" style={{ backgroundColor: "rgb(161, 224, 67)" }}>Add To Cart</div>
            <div className="col text-center py-2" style={{ backgroundColor: "red", color: 'white' }}>Buy Now</div>
          </div>
        </div>
      </div>
      <div id='itemDetailsDiv' style={{ marginLeft: "10px", marginRight: "10px", overflowX: 'hidden' }}>
        <h3 className='my-2'>{item.title}</h3>
        <h1>₹{item.price}</h1>
        <hr />
        {item.availableOffers.map(element => {
          return (
            <p><b>{element.type}</b>: {element.offer}</p>
          )
        })}
        <hr />
        <h1 style={{ backgroundColor: 'yellow', color: 'black', padding: "5px" }}>Key Highlights</h1>
        <hr />
        <ul>
          <div className="row row-cols-2">

            {Object.keys(item.details).map(key => {
              return (
                <div className="col"><ItemHighlights key={key} heading={key} data={item.details[key]} /></div>
              )
            })}
          </div>
        </ul>
        <OwlCarousel className='owl-theme my-2' loop margin={10} nav autoplay={true} responsiveClass={true} >
          {JsonData.items.filter(element => element.category === item.category).map(item => {
            return (
              <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: "none", color: 'black' }}>
                <div className="card hover mx-auto" id="slidingcard-for-mobile" style={{ margin: "1.2vw" }}>
                  <img src={item.image[0]} className="card-img-top" id="slidingcardImg-for-mobile" alt="..." style={{ objectFit: "contain", paddingTop: "1vw" }} />
                  <div className="card-body" style={{ padding: "1vw" }}>
                    <h5 className="card-title" id="slidingcardTitle-for-mobile">{item.title}</h5>
                    <h2 id="slidingcardPrice-for-mobile">₹{item.price}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
        </OwlCarousel>
      </div>
      <div className='row fixed-bottom' id='buyDivInNonSplit'>
        <div className="col text-center py-2" style={{ backgroundColor: "rgb(161, 224, 67)" }}>Add To Cart</div>
        <div className="col text-center py-2" style={{ backgroundColor: "red", color: 'white' }}>Buy Now</div>
      </div>
    </div>
  )
}
