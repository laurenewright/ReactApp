import React from 'react';

//format the book data

const Book = props => (
  <li className="profile">
    <p>
        <li>Name: {props.book.name || "Unknown"}</li>
        <li>ISBN: {props.book.isbn || "Unknown"}</li>
        <li>Author: {props.book.authors || "Unknown"}</li>
        <li>Number of Pages: {props.book.numberOfPages || "Unknown"}</li>
        <li>Publisher: {props.book.publisher || "Unknown"}</li>
        <li>Country: {props.book.country || "Unknown"}</li>
        <li>Released: {props.book.released || "Unknown"}</li>
    </p>
  </li>
);

export default Book;