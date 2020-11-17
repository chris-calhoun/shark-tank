import React, { Component } from 'react';
import { Card } from 'reactstrap';

export default class LiveStudent extends Component {
  render() {
    const { student } = this.props;
    return (
      <Card className='liveCards'>
        <img width='100%' src={student.image} alt='student' />
      </Card>

    );
  }
}
