import React, { useEffect } from "react";

function BookList({ books }) {
  return (
    <div>
      <ul id="book-list">
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
