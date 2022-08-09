import React, { useState } from "react";
import BookDetail from "./BookDetail";

function BookList({ books }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ul id="book-list">
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => {
              setSelected(book.id);
            }}
          >
            {book.name}
          </li>
        ))}
      </ul>
      {selected ? (
        <BookDetail bookId={selected} />
      ) : (
        <div>No book selected...</div>
      )}
    </div>
  );
}

export default BookList;
