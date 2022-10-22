import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <ul className="list-planets">
          { planets
            .map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
