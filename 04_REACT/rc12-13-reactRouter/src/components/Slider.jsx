import React from 'react'
import { Carousel } from 'react-bootstrap'
import isa from "../img/isa.jpeg";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";
import "./slider.css"

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={isa} alt="" className='w-100' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={devops}  alt="" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={about} alt="" className='w-100'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider