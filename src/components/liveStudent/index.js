import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';

export default class LiveStudent extends Component {
  render() {
    const { student } = this.props;
    return (
      <Card className='liveCards'>
        <CardText>
          {student.firstName} {student.lastName}
        </CardText>
      </Card>
    );
  }
}
