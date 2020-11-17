import React, { Component } from 'react';
import LiveStudent from '../liveStudent';

export default class sharkTank extends Component {
  render() {
    const { livingStudents } = this.props;
    const renderStudentToDom = () => livingStudents.map((student) => (
        <LiveStudent key={student.id} student={student} />
    ));
    return (
      <div className='sharkTank'>
        <div className='liveStudents'>
          {renderStudentToDom()}
        </div>
      </div>
    );
  }
}
