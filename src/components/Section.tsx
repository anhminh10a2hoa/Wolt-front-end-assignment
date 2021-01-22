import React from 'react';
import { ISection } from '.././models/ISection';
import { IRestaurant } from '../models/IRestaurant';
import Restaurant from './Restaurant';
import Carousel from "react-elastic-carousel";

type SectionProps = {
  section: ISection,
}

const Section: React.FC<SectionProps> = ({section}) => {
  return (
    <div className="section-container">
      <p className="section-title">{section.title}</p>
      <div className="restaurant-container">
      <Carousel isRTL={true} itemsToShow={4}>
        {section.restaurants.map((restaurant: IRestaurant, index: number) => (
          <Restaurant restaurant={restaurant} key={index}/>
        ))}
      </Carousel>
      </div>
    </div>
  );
}

export default Section;
