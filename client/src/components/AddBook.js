import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ADD_BOOK, GET_AUTHORS, GET_BOOKS } from "../queries/queries";

function AddBook() {
  // get authors
  const { loading, error, data } = useQuery(GET_AUTHORS);

  // for addBook
  const [addBook, {}] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  //  to select book's author
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    addBook({
      variables: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId,
      },
    });

    setBook({
      name: "",
      genre: "",
      authorId: "",
    });
  };

  return (
    <form id="add-book" onSubmit={submit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={book.name}
          onChange={(e) =>
            setBook((book) => {
              return { ...book, name: e.target.value };
            })
          }
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={book.genre}
          onChange={(e) =>
            setBook((book) => {
              return { ...book, genre: e.target.value };
            })
          }
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          value={book.authorId}
          onChange={(e) =>
            setBook((book) => {
              return { ...book, authorId: e.target.value };
            })
          }
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button className="add-btn">+</button>
    </form>
  );
}

export default AddBook;
