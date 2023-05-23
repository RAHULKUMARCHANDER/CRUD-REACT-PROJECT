import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import UpdateBook from './UpdateBook';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleUpdateBook = (id, updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  return (
    <div>
      <BookForm onAddBook={handleAddBook} />
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onSelectBook={handleSelectBook}
      />
      {selectedBook && (
        <UpdateBook book={selectedBook} updateBook={handleUpdateBook} />
      )}
    </div>
  );
};

export default Books;
