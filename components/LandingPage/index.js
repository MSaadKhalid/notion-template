import React from 'react'
import Header from './Header'
import Hero from './Hero';
import Heading from './Headings';
import Cards from './Cards';
import Slider from './Slider'
import Tutorials from './Turtorials';
import Pricing from './Pricing';
import Contact from './Contact';


function index() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Heading heading={'Features'} paragraph={'Premium React components bundled with TailwindCSS to give devs a headstart'}/>
        <Cards/>
        <Heading heading={'Template Showcase'} paragraph={'Premium React components bundled with TailwindCSS to give devs a headstart'}/>
        <Slider/>
        <Heading heading={'Tutorials'} paragraph={'Hear how we have changed the workflow of fellow React Developers'}/>
        <Tutorials/>
        <Heading heading={'Solid Pricing'} paragraph={'No nonsense simple Pricing plans for Product Managers and Developers'}/>
        <Pricing/>
        <Contact/>
    </div>  
  )
}

export default index