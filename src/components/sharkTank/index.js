import React, { Component } from 'react';
import getStudents from '../../helpers/data/studentData';

export default class sharkTank extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    getStudents().then((response) => {
      this.setState({
        students: response,
      });
    });
  }

  render() {
    const { students } = this.state;
    console.warn({ students });
    return (
      <div className='liveStudents'>
        <h2>SURVIVORS</h2>
      </div>
    );
  }
}
