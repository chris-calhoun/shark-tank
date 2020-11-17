import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';
import Graveyard from '../components/graveyard';
import {
  livingStudents,
  dearlyBeloved,
  followTheLight,
} from '../helpers/data/studentData';

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
      const unluckyStudent = this.state.liveStudents[
        Math.floor(Math.random() * this.state.liveStudents.length)
      ];
      followTheLight(unluckyStudent.id);
      this.loadLivingStudents();
      this.loadDeadStudents();
    }
  };

  render() {
    const { liveStudents, deadStudents } = this.state;
    return (
      <div className='App'>
        <nav className='navbar navbar-light navbar-center bg-dark'>
          <form className='form-inline'>
            <button
              className='btn btn-danger'
              onClick={this.sharkAttack}
              type='button'>
              Shark Attack
            </button>
          </form>
        </nav>
        <SharkTank liveStudents={liveStudents} />
        <h2>Graveyard</h2>
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
