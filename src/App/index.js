import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <nav className='navbar navbar-light navbar-center bg-dark'>
          <form className='form-inline'>
            <button className='btn btn-danger' type='button'>
              Shark Attack
            </button>
          </form>
        </nav>
        <div className='sharkTank'>
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
