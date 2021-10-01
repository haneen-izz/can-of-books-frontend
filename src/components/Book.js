import React, { Component } from "react";
import BookCard from "./BookCard.js"

class Cat extends Component {
  render() {
    return (
      <>
      <BookCard
       deleteBookFunc = {this.props.deleteBookFunc}
        title = {this.props.bookInfo.title}
        description= {this.props.bookInfo.description}
        status = {this.props.bookInfo.status}
        email = {this.props.bookInfo.email}
       _id = {this.props.bookInfo._id}
        />
      </>
    );
  }
}

export default Cat;
