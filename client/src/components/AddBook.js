import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_AUTHORS } from "../queries/queries";

function AddBook() {
  // get authors
  const { loading, error, data } = useQuery(GET_AUTHORS);

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
    console.log(book);
  };

  return (
    <form id="add-book" onSubmit={submit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
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
      <button>Add</button>
    </form>
  );
}

export default AddBook;
