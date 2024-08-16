import { gql } from "@apollo/client";

export const INCREMENT_SUBSCRIPTION = gql`
  subscription Subscription {
  incrementCount
}
`;

export const DECREMENT_SUBSCRIPTION = gql`
subscription Subscription {
decrementCount
}
`;