import React from 'react';
import { useState, useEffect } from 'react';

export default function Campeones() {
  const [campeones, setCampeones] = useState([]);

  const getCampeones = async () => {
      const response = await fetch('https://ddragon.leagueoflegends.com/cdn/16.15.1/data/es_MX/champion.json');
      const data = await response.json();
      setCampeones(Object.values(data.data));
    }


useEffect(() => {
    getCampeones();
}, []);

  return (
    <div>
      <p>Total de campeones: {campeones.length}</p>
      {campeones.map((campeon) => (
          <div key={campeon.id}>
            <h1>{campeon.name}</h1>
            <p>{campeon.title}</p>
            <p>{campeon.blurb}</p>
            <img src={campeon.image.full} alt={campeon.name} />
            <p>{campeon.tags.join(',')}</p>
          </div>
      ))}
    </div>
  );
}