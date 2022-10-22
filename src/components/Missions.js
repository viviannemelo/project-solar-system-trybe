import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul className="list-missions">
          {missions
            .map((mission) => (
              <MissionCard
                key={ mission }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
