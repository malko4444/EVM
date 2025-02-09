import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import Results from '../../components/results/Results'

export default function Home() {
  return (
    <div className='bg-white container'>
        <div className='mb-1'>
        <Navbar  />
        <Hero/>
        <Results/>
        <Footer/>
        
        
        </div>
        
        
    </div>
  )
}
