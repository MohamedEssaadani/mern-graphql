import { gql } from "@apollo/client";

// Queries
const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

// Mutations
const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS, ADD_BOOK };
