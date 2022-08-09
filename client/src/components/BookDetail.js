import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SINGLE_BOOK } from "../queries/queries";

const BookDetail = ({ bookId }) => {
  const { loading, data } = useQuery(GET_SINGLE_BOOK, {
    variables: { id: bookId },
  });

  return (
    <div id="book-details">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
