import React from 'react'
import { Link, useParams } from 'react-router-dom'
import JsonData from './data.json'
import Footer from './Footer'

export default function ItemsPage() {
  const { category } = useParams()
  const items = JsonData.items.filter(item => item.category === category)

  return (
    <>
      <div className="row mx-2">
        {
          items.map(item => {
            return (
              <div key={item.id} className="col my-3">
                <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: 'black' }}>
                  <div className="card hover mx-auto card-for-mobile" style={{ height: "100%" }}>
                    <img src={item.image[0]} className="card-img-top cardImg-for-mobile" alt="..." style={{ objectFit: "contain", paddingTop: "1vw" }} />
                    <div className="card-body" style={{ padding: "1vw" }}>
                      <h5 className="card-title cardTitle-for-mobile">{item.title}</h5>
                      <h2 className='cardPrice-for-mobile'>₹{item.price}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </>

  )

}
