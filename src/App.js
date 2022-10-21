import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import planets from './data/planets';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
