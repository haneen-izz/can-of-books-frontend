import React, { Component } from "react";
import BookCard from "./BookCard.js"

class Book extends Component {
  render() {
    return (
      <>
      <BookCard
       deleteBookFunc = {this.props.deleteBookFunc}
        title = {this.props.bookInfo.title}
        description= {this.props.bookInfo.description}
        status = {this.props.bookInfo.status}
        email = {this.props.bookInfo.email}
        id = {this.props.bookInfo.id}
        />
      </>
    );
  }
}

export default Book;
