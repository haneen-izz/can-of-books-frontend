import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import "./BestBooks.css";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";

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
  addBook= async (e) => {
    e.preventDefault();
    console.log('addBook func');
    let bookModalFun = {
      title1: e.target.title.value,
      description1: e.target.description.value,
      status1: e.target.status.value, 
      email1: e.target.email.value
    };
    let createBook = await axios.post(
      `${process.env.REACT_APP_SERVER}/addBook`,
      bookModalFun
    );

    this.setState({
      bookInfo: createBook.data,
    });
  };
  deleteBook = async (bookID) =>{
    console.log('inside deleteBook');
    console.log(bookID)
    let Email = this.props.auth0.user.email;
    let deleteData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBook?bookID=${bookID}&email=${Email}`)
    
    this.setState ({
      bookInfo: deleteData.data
    })

  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        </Jumbotron>
        <BookForm addBookFunc={this.addBook} />
        {this.state.bookInfo.map((data) => {
          return <BookCard bookInfo = {data} deleteBookFunc = {this.deleteBook} />
        }
        )}
        <br />
      </>
    );
  }
}
export default withAuth0(MyFavoriteBooks);
