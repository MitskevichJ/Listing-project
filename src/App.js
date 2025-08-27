import React from 'react';
import './App.css';
import Listing from './Listing';

function App() {
  const jsonString = `[
    {
      "listing_id": 292754135,
      "url": "https://www.etsy.com/listing/292754135/woodland-fairy",
      "MainImage": {
        "url_570xN": "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"
      },
      "title": "Woodland Fairy",
      "currency_code": "USD",
      "price": "3.99",
      "quantity": 12
    }
  ]`; 

  const items = JSON.parse(jsonString);

  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;