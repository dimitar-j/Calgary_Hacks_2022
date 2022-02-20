import React from 'react'
import HomeNav from '../components/HomeNav'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <HomeNav></HomeNav>
            <Hero></Hero>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    )
}

export default Home
