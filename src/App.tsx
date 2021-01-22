import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import { ISection } from "./models/ISection";
import restaurants_data from "./data/discovery_page.json";
import './App.css';
import Navigation from "./components/Navigation";


function App() {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    let sections = [];
    for(const section in restaurants_data.sections){
      sections.push(restaurants_data.sections[section]);
    }
    setData(sections);
  }, [])

  return (
    <div className="App">
      <Navigation />
      {
        data.map((section: ISection, index: number) => (
          <Section section={section} key={index}/>
        ))
      }
    </div>
  );
}

export default App;
