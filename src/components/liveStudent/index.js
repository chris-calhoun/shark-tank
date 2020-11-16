import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

export default class LiveStudent extends Component {
  render() {
    const { student } = this.props;
    console.warn(student);
    return (
      <Card>
        <CardBody>
          <CardText>{student.firstName} {student.lastName}</CardText>
        </CardBody>
      </Card>
    );
  }
}
