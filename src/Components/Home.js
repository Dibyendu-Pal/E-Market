import React from 'react'
import CarouselImages from './CarouselImages'
import Categories from './Categories'
import SlidingCards from './SlidingCards'
import Footer from './Footer'

import JsonData from './data.json'

export default function Home(props) {
    return (
        <>
            <CarouselImages images={JsonData.carouselImage.map(element => element.url)} />
            <Categories items={JsonData.categoriesImage} mode={props.mode}/>
            {/* {console.log(JsonData.slidingCards.map(element => element.image))} */}
            {/* {console.log(JsonData.categoriesImage.map(element => element.url))} */}
            <SlidingCards />
            <Footer/>
        </>
    )
}
