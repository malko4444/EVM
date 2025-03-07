import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import Results from '../../components/results/Results'
import FaceUploader from '../../components/faceUploader/FaceUploader'
// import FaceUploader from '../../components/faceUploader/FaceUploader'

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
