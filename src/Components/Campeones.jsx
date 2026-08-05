import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Campeones() {
  const [campeones, setCampeones] = useState([]);




  const getCampeones = async () => {
    try{
      const response = await fetch('http://localhost:8080/champions/allchampions');
      const data = await response.json();

      const campeonesFiltrados=Object.values(data.data).filter(campeon => !campeon.id.startsWith("Jade"));
      setCampeones(campeonesFiltrados);

    }
    catch (error) {
      console.error('Error fetching champions:', error);
    }
  };

  console.log(campeones.id);



useEffect(() => {
    getCampeones();
}, []);

  return (
    <div>
      <p>Total de campeones: {campeones.length}</p>
      {campeones.map((campeon) => (
        
          <div key={campeon.id}>
            <img src = {`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon.id}_0.jpg`} alt={campeon.name} />
            <h1>{campeon.name}</h1>
            <Link to={`/campeon/${(encodeURIComponent(campeon.id))}`}>
              Detalles del campeon
          </Link>
          </div>
      ))}
    </div>
  );
}