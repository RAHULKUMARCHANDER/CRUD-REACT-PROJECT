import React, { useState } from 'react';

const UpdateBook = ({ book, updateBook }) => {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    year: book.year,
    isbn: book.isbn,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateBook = () => {
    updateBook(book.id, formData);
  };

  return (
    <div className="book-form">
      <h2>Update Book</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleUpdateBook}>Update Book</button>
      </div>
    </div>
  );
};

export default UpdateBook;
