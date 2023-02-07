import React, { useState, useEffect } from 'react';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const url = "https://swapi.dev/api/planets/";
    fetch(url)
    .then(res=>res.json())
    .then(res=>res.results)
    .then(planets=>setPlanets(planets))

  }, []);

  const handleClick = planet => {
    setSelectedPlanet(planet);
  };

  return (
    <div style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center' }}>
      <div>
        <h2>Star Wars Planets</h2>
        <h3>Select a Planet</h3>
        <ul>
          {planets.map(planet => (
            <li key={planet.name} onClick={() => handleClick(planet)}>
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPlanet && (
        <div style={{ marginTop: '30px' }}>
          <h2>{selectedPlanet.name} Planet Information</h2>
          <div style={{ textAlign: 'center' }}>
            <p>Name: {selectedPlanet.name}</p>
            <p>Diameter: {selectedPlanet.diameter}</p>
            <p>Climate: {selectedPlanet.climate}</p>
            <p>Terrain: {selectedPlanet.terrain}</p>
            <p>Rotation Period: {selectedPlanet.rotation_period}</p>
            <p>Orbital Period: {selectedPlanet.orbital_period}</p>
            <p>Gravity: {selectedPlanet.gravity}</p>
            <p>Surface Water: {selectedPlanet.surface_water}</p>
            <p>Population: {selectedPlanet.population}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planets;
