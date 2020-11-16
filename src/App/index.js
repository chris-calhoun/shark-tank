import React from 'react';
import './App.scss';
import SharkTank from '../components/sharkTank';
import getLiveStudents from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: [],
  };

  componentDidMount() {
    getLiveStudents().then((resp) => {
      this.setState({
        livingStudents: resp,
      });
    });
  }

  render() {
    const { livingStudents } = this.state;
    console.warn(livingStudents);
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
          <SharkTank livingStudents={livingStudents} />
        </div>
        <div className='graveyard'>
          <h1>Graveyard</h1>
        </div>
      </div>
    );
  }
}

export default App;
