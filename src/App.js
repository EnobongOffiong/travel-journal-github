import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Experience from './Experience';
import data from './data.js'

function App() {
  
  const cards = data.map(function(item){
   return(
    
    <div>
    <Experience 
      img={item.img}
      googleMapsUrl={item.googleMapsUrl}
      country={item.country}
      header = {item.header}
      date = {item.date}
      description={item.description}

    />
    <hr></hr>
    </div>
   )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
