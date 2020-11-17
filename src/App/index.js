import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';
import { livingStudents } from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    liveStudents: [],
  };

  componentDidMount() {
    livingStudents().then((resp) => {
      this.setState({
        liveStudents: resp,
      });
    });
  }

  render() {
    const { liveStudents } = this.state;
    return (
      <div className='App'>
        <nav className='navbar navbar-light navbar-center bg-dark'>
          <form className='form-inline'>
            <button className='btn btn-danger' type='button'>
              Shark Attack
            </button>
          </form>
        </nav>
          <SharkTank liveStudents={liveStudents} />
        <div className='graveyard'>
          <h1>Graveyard</h1>
        </div>
      </div>
    );
  }
}

export default App;
