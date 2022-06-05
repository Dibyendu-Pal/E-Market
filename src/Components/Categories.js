import React from 'react'
import { Link } from 'react-router-dom'
// import image1 from 'e-market/public/Images/CategoriesImage/'
// import image2 from 'e-market/public/Images/minimal-landscape-sunrise-4k-jy.jpg'
// import image3 from 'e-market/public/Images/sunrise-vasco-da-gama-bridge-lisbon-portugal.jpg'

export default function Categories(props) {
    return (
        <div className="container">
            <div className="row row-cols-5 category-div">
                {props.items.map(element => {
                    return (
                        <Link key={element.id} to={`/itempage/${element.category}`} style={{textDecoration: 'none', color: 'black', marginBottom: "2vw"}}>
                            <div className="col d-flex justify-content-center">
                                <div>
                                    <img src={element.url} className="rounded-circle" style={{ objectFit: "cover", height: "13vw", width: "13vw" }} alt="..." data-holder-rendered="true" />
                                    <h1 className='text-center mt-1'style={props.mode==='dark'?{fontSize: "2vw", color: 'white'}:{fontSize: "2vw"}}>{element.name}</h1>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
