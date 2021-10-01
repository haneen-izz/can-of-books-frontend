import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap/";

class BookForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.addBookFunc}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name ="title" placeholder="Enter the title" />
            <Form.Control type="text" name="description" placeholder="Enter the description" />
            <Form.Control type="text" name ="status" placeholder="Enter the status" />
            <Form.Control type="text" name="email" placeholder="Enter the email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            add book
          </Button>
        </Form>
      </>
    );
  }
}
export default BookForm;
