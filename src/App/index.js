import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';
import { livingStudents, dearlyBeloved } from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    liveStudents: [],
    deadStudents: [],
  };

  componentDidMount() {
    this.loadLivingStudents();
    this.loadDeadStudents();
  }

  loadLivingStudents = () => livingStudents().then((resp) => {
    this.setState({
      liveStudents: resp,
    });
  });

  loadDeadStudents = () => dearlyBeloved().then((resp) => {
    this.setState({
      deadStudents: resp,
    });
  });

  sharkAttack = () => {
    if (this.state.liveStudents.length) {
      const unluckyStudent = this.state.liveStudents[Math.floor(Math.random() * this.state.liveStudents.length)];
      console.warn(unluckyStudent);
    }
  }

  render() {
    const { liveStudents, deadStudents } = this.state;
    return (
      <div className='App'>
        <nav className='navbar navbar-light navbar-center bg-dark'>
          <form className='form-inline'>
            <button className='btn btn-danger' onClick={this.sharkAttack} type='button'>
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
