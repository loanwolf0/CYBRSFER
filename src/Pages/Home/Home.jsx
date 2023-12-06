import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import './Home.css'
import Title from '../../Components/Title/Title'
import Waterdrop from '../../Components/Waterdrop/Waterdrop'
import WaterWave from '../../Components/WaterWave/WaterWave'
import AllReviws from '../../Components/AllReviews/AllReviws'
import ContactForm from '../../Components/ContactFORM/ContactForm'
import FAQ from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Our_internship from '../../Components/Our_internship/Our_internship'
import AboutC from '..//../Components/AboutC/AboutC'

const Home = () => {
  return (
    <div className='home-main'>
        <Navbar/>
      <div className="home_top">
        <Hero/>
      </div>
      <WaterWave/>
      <AboutC/>
       <Title/>
       <Waterdrop/>
       <Our_internship/>
       {/* <AboutSection/>
        <div className="aboutTesti">
          <Testimonials/>
       </div> */}
       <AllReviws/>
      <ContactForm/> 
      <FAQ/> 
      <Footer/>    
    </div>
  )
}

export default Home