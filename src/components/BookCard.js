import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
class BookCard extends Component {

  deleteBookHandler = () => {
    this.props.deleteBookFunc(this.props._id);
  };
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
              <Card
                border="primary"
                style={{ width: "18rem", fontFamily: "Times New Roman" }}
              >
                <Card.Header style={{ fontWeight: "bold" }}>book</Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {this.props.title}
                  </Card.Title>
                  <Card.Text>{this.props.description}</Card.Text>
                  <Card.Text>{this.props.status}</Card.Text>
                  <Card.Text>{this.props.email}</Card.Text>
                  <button variant="primary" onClick={this.deleteBookHandler}>delete</button>
                </Card.Body>
              </Card>
            </Row>
        
      </>
    );
  }
}

export default BookCard;