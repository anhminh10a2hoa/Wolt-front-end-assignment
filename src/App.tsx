import React, { useEffect, useState, Fragment } from 'react';
import { decode } from "blurhash";
import { Section } from "./models/Section";
import restaurants_data from "./data/discovery_page.json";
import './App.css';
import { Restaurant } from './models/Restaurant';

function App() {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    let sections = [];
    for(const section in restaurants_data.sections){
      sections.push(restaurants_data.sections[section]);
    }
    setData(sections);
    getImageData();
    console.log(sections);
  }, [])

  const getImageData = () => {
    const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);
    console.log(pixels);
  };

  return (
    <div className="App">
      {
        data.map((section: Section) => (
          <Fragment>
            <h1>{section.title}</h1>
            {/* {section.restaurants.map((restaurant: Restaurant) => (
            ))} */}
          </Fragment>
        ))
      }
    </div>
  );
}

export default App;
