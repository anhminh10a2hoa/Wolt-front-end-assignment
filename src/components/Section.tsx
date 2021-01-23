import React from 'react';
import { ISection } from '.././models/ISection';
import { IRestaurant } from '../models/IRestaurant';
import Restaurant from './Restaurant';
import Slider from "react-slick";

type SectionProps = {
  section: ISection,
}

const Section: React.FC<SectionProps> = ({section}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="section-container">
      <p className="section-title">{section.title}</p>
      <div className="section-slider">
        <Slider {...settings}>
          {section.restaurants.map((restaurant: IRestaurant, index: number) => (
            <Restaurant restaurant={restaurant} key={index} index={index}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section;
