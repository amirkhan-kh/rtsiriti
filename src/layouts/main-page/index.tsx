import React from 'react'
import HeroIntro from '../sections/home/hero-intro'
import CarouselHome from '../sections/home/carousel'
import SelectHome from '../sections/home/select'
import Model from '../sections/home/employess'
import CardAnimations from '../sections/home/cards-animation'

const MainPage: React.FC = () => {
  return (
    <div className=''>
      <HeroIntro/>
      <CarouselHome/>
      <SelectHome/>
      <Model/>
      <CardAnimations/>
    </div>
  )
}

export default MainPage
