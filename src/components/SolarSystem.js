import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

const SolarSystem = () => (
  <div>
    <div data-testid="solar-system" />
    <Title headline="Planetas" />
    {Planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ))}
    ;
  </div>
);

export default SolarSystem;
