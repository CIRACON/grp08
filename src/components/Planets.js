import React, { useState, useEffect } from 'react';

// This initializes the planets
const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    fetchPlanets();
  }, []);
//   This gets the data
  const fetchPlanets = async (url = 'https://swapi.dev/api/planets/') => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setPlanets([...planets, ...data.results]);
    setNextPage(data.next);
    setLoading(false);
  };
//   This gets the plantes data
  const handleClick = planet => {
    setSelectedPlanet(planet);
  };
  return (
    <div style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center' }}>
      <div>
        <h2>Star Wars Planets</h2>
        <h3>Select a Planet</h3>
        {/* This selects a planet to view */}
          {planets.map(planet => (
            <li key={planet.name} onClick={() => handleClick(planet)}>
              {planet.name}
            </li>
          ))}
          {/* This loads more planets */}
        {loading ? (
          <p>Loading Planets...</p>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button disabled={!nextPage} onClick={() => fetchPlanets(nextPage)}>
              Click to Load More Planets
            </button>
          </div>
        )}
      </div>
      {/* This is all the planets Information */}
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