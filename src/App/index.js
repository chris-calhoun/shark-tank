import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='sharkTank'>
          <h1>Shark Attack</h1>
          <SharkTank />
        </div>
        <div className='graveyard'>
          <h1>Graveyard</h1>
        </div>
      </div>
    );
  }
}

export default App;
