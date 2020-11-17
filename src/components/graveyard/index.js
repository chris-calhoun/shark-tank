import React, { Component } from 'react';
import Gravestone from '../gravestone';

export default class Graveyard extends Component {
  render() {
    const { deadStudents } = this.props;
    const renderStudentToDom = () => deadStudents.map((student) => (
        <Gravestone key={student.id} student={student} />
    ));
    return (
      <div className='graveyard'>
        <div className='gravestones'>{renderStudentToDom()}</div>
      </div>
    );
  }
}
