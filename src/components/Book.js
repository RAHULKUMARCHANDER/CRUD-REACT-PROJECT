import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>ISBN: {book.isbn}</p>
    </div>
  );
};

export default Book;
