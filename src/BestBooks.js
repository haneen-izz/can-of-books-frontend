import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import "./BestBooks.css";
import Row from "react-bootstrap/Row";
import bookModalForm from "./components/bookModalForm.js";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: [],
    };
  }

  componentDidMount = async () => {
    // console.log('inside componentDidMount')
    let Email = this.props.auth0.user.email;
    let bookURL = await axios.get(
      `${process.env.REACT_APP_SERVER}/getBook?email=${Email}`
    );
    this.setState({
      bookInfo: bookURL.data,
    });
    console.log("books", this.state.bookInfo);
  };
  addBook = async (e) => {
    e.preventDefault();
    // console.log('addBook func');

    let bookModalFun = {
      title1: e.target.title.value,
      description1: e.target.description1.value,
      status1: e.target.status.value,
      email1: this.props.auth0.user.email,
    };
    let createBook = await axios.post(
      `${process.env.REACT_APP_SERVER}/addBook`,
      bookModalFun
    );

    this.setState({
      books: createBook.data,
    });
  };
  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        </Jumbotron>
        {this.state.bookInfo.map((item) => {
          return (
            <Row xs={1} md={3} className="g-4">
              <Card
                border="primary"
                style={{ width: "18rem", fontFamily: "Times New Roman" }}
              >
                <Card.Header style={{ fontWeight: "bold" }}>book</Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.status}</Card.Text>
                  <Card.Text>{item.email}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
        <br />
        <bookModalForm addBookFunc={this.addBook} />
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
