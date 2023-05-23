import React from 'react';

const BookList = ({ books, onDeleteBook }) => {
  const handleDelete = (title) => {
    onDeleteBook(title);
  };

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.title} className="book-item">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
          <p>ISBN: {book.isbn}</p>
          <button onClick={() => handleDelete(book.title)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
