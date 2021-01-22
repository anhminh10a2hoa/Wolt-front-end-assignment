import React from 'react';
import { Blurhash } from "react-blurhash";
import { IRestaurant } from '../models/IRestaurant';

type RestaurantProps = {
  restaurant: IRestaurant
}

const Restaurant: React.FC<RestaurantProps> = ({restaurant}) => {
  return (
    <div className="restaurant">
      <Blurhash
        hash={restaurant.blurhash}
        width={384}
        height={216}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <p className="status">{restaurant.online ? "Online" : "Offline"}</p>
      <p className="name">{restaurant.name}</p>
    </div>
  );
}

export default Restaurant;
