import React from 'react';
import Book from './Book';

const BookList = props => {
    console.log(this)
    return (
        <ul className="book-list">
            {props.list.map(b => <Book book={b}/>)}
        </ul>
    );
}

export default BookList;