import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
class BookCard extends Component {

  deleteBookHandler = () => {
    this.props.deleteBookFunc(this.props.id);
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
                    {this.props.bookInfo.title}
                  </Card.Title>
                  <Card.Text>{this.props.bookInfo.description}</Card.Text>
                  <Card.Text>{this.props.bookInfo.status}</Card.Text>
                  <Card.Text>{this.props.bookInfo.email}</Card.Text>
                  <Button onClick={this.deleteBookHandler}>delete</Button> 
                </Card.Body>
              </Card>
            </Row>
        
      </>
    );
  }
}

export default BookCard;