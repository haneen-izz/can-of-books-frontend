import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap/";

class bookModalForm extends Component {
  render() {
    return (
      <>
              <Form onSubmit ={this.props.addBookFunc}>
            <Form.Control type="text" placeholder="Enter the title" />
            <Form.Control type="text" placeholder="Enter the description" />
            <Form.Control type="text" placeholder="Enter the status" />
            <Form.Control type="text" placeholder="Enter the email" />
            <Button variant="primary" type="submit">
              add book
            </Button>
            </Form>
      </>
    );
  }
}

export default bookModalForm ;
