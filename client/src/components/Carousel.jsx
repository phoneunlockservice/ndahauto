// src/components/HeroCarousel.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import car1 from '../assets/carousel-imgs/car1.jpg';
import car2 from '../assets/carousel-imgs/car2.jpg';
import car3 from '../assets/carousel-imgs/car3.jpg';

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false
  };

  const slides = [
    { id: 1, image: car1, caption: 'Comfort Meets Class' },
    { id: 2, image: car2, caption: 'Luxury Vehicles for Every Journey' },
    { id: 3, image: car3, caption: 'Drive with Confidence' }
  ];

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="carousel-caption">
              <h2>{slide.caption}</h2>
              <button className='button-l-style'> <Link to="/reserve" className="aref">Reserve Now</Link></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}