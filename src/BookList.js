import React from 'react';
import Book from './Book';

//map through the book data array

const BookList = props => {
    console.log(this)
    return (
        <ul className="book-list">
            {props.list.map(b => <Book book={b}/>)}
        </ul>
    );
}

export default BookList;