import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
