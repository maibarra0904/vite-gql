import { gql } from "@apollo/client";

export const INCREMENT_MUTATION = gql`
  mutation Mutation {
  increment
}
`;

export const DECREMENT_MUTATION = gql`
  mutation Mutation {
  decrement
}
`;