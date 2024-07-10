import React from 'react'
import Testemonial from './_components/Testemonial'
import HomeSection from './_components/HomeSection'
import HeroSection from './_components/HeroSection'
import FooterSection from './_components/FooterSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <HomeSection/>
        <Testemonial/>
        <FooterSection/>
    </div>
  )
}

export default Home