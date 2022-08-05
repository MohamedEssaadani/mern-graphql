import BookList from "./components/BookList";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

// create query
const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

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
      <h1>Let's consume graphql api!</h1>
      <BookList books={data.books} />
    </div>
  );
}

export default App;
