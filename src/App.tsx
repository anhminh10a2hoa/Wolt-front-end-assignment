import React, { useEffect, useState, Fragment } from 'react';
import { Blurhash } from "react-blurhash";
import { Section } from "./models/Section";
import restaurants_data from "./data/discovery_page.json";
import './App.css';
import { Restaurant } from './models/Restaurant';
import Navigation from "./components/Navigation";

function App() {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    let sections = [];
    for(const section in restaurants_data.sections){
      sections.push(restaurants_data.sections[section]);
    }
    setData(sections);
    console.log(sections);
  }, [])

  return (
    <div className="App">
      <Navigation />
      {
        data.map((section: Section) => (
          <div className="section-container">
            <h1 className="section-title">{section.title}</h1>
            <div className="restaurant-container">
              {section.restaurants.map((restaurant: Restaurant) => (
                <div className="restaurant">
                  <Blurhash
                    hash={restaurant.blurhash}
                    width={480}
                    height={270}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    className="img"
                  />
                  <p className="status">{restaurant.online ? "Online" : "Offline"}</p>
                  <h2 className="name">{restaurant.name}</h2>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
