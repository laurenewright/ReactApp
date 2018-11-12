import React from 'react';
import book from './Book';

// import Book from './Book';

const BookList = props => {
    console.log(this)
    return (
        <ul className="book-list">
            {/* {props.book.map(b => <Book book={b}/>)} */}
        </ul>
    );
}

export default BookList;