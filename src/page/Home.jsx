import React from 'react'
import PackageDetail from '../components/PackageDetail'
import SliderCarousel from '../components/SliderCarousel'
import { HeroSection } from '../components/HeroSection'

const Home = () => {
  return (
    <>
     <HeroSection />
     <SliderCarousel />
     <PackageDetail />
    </>
  )
}

export default Home