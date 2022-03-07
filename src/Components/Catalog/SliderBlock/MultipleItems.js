import React from 'react';
import Slider from 'react-slick';
import './MultipleItems.css';
import motoImg1 from './Images/motoImg1.jpg';
import motoImg2 from './Images/motoImg2.jpg';
import motoImg3 from './Images/motoImg3.jpg';
import motoImg4 from './Images/motoImg4.jpg';
import motoImg5 from './Images/motoImg5.jpg';
import motoImg6 from './Images/motoImg6.jpg';
import motoImg7 from './Images/motoImg7.jpg';


const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  if (document.documentElement.clientWidth < 1025) {
    settings.slidesToShow = 1
    settings.slidesToScroll = 1
  };
  
  let rounds =[
      motoImg1,
      motoImg2,
      motoImg3,
      motoImg4,
      motoImg5,
      motoImg6,
      motoImg7

];


  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>
      {rounds.map(( item , index) => {
                return(
            <div className="sliderItem2">
                <img key={index} className="round" src={item} />
            </div>)
            }       
    )}
      </Slider>
    </div>
  );
}


export default MultipleItems;
