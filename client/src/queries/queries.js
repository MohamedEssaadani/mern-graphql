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

export { GET_AUTHORS, GET_BOOKS };
