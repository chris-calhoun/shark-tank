import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Shark Attack</h1>
        <SharkTank />
      </div>
    );
  }
}

export default App;
