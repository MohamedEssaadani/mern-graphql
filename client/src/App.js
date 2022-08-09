import BookList from "./components/BookList";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_BOOKS } from "./queries/queries";
import AddBook from "./components/AddBook";

function App() {
  // use getbooks query
  const { loading, error, data } = useQuery(GET_BOOKS);

  useEffect(() => {
    data && console.log(data);
  });

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="main">
      <h1 className="title">Books List</h1>
      <div className="books-list">
        <BookList books={data.books} />
        <AddBook />
      </div>
    </div>
  );
}

export default App;
