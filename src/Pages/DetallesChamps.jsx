import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function DetallesChamps() {

    const { id } = useParams();

    const [campeon, setCampeon] = useState(null);

    const nombre = decodeURIComponent(id);


    useEffect(() => {

        const fetchChamp = async () => {

            try {
                const response = await fetch(`http://localhost:8080/champions/detail/${nombre}`);
                const data = await response.json();
                console.log(data);
                setCampeon(Object.values(data.data)[0]);
            } catch(error) {
                console.error(error);
            }
        };
        fetchChamp();
    }, [nombre]);


  return (
    <div>

        {campeon && (

            <div>

                <h1 className="ChampName">{campeon.name}</h1>
                <div id="skinsCarousel" className="carousel slide">
                    <div className="carousel-inner">
                        {campeon.skins
                            .filter(skin => !skin.parentSkin)
                            .map((skin, index) => (
                                <div 
                                    key={skin.id}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon.id}_${skin.num}.jpg`}
                                        className="d-block w-100"
                                        alt={skin.name}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{skin.name}</h5>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#skinsCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#skinsCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>


                <p>{campeon.lore}</p>
                <p>{campeon.title}</p>
                <p>
                    Skins disponibles = {
                        campeon.skins.filter(skin => !skin.parentSkin).length
                    }
                </p>
            </div>
        )}
    </div>
)
}