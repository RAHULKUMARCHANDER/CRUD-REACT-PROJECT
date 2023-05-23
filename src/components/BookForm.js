import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    isbn: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateBook = () => {
    onAddBook(formData);
    setFormData({
      title: '',
      author: '',
      year: '',
      isbn: '',
    });
  };

  return (
    <div className="book-form">
      <h2>Add a Book</h2>
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
        <button onClick={handleCreateBook}>Add Book</button>
      </div>
    </div>
  );
};

export default BookForm;
