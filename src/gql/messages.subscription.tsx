import { gql } from "@apollo/client";


export const NEW_MESSAGE = gql`
  subscription Subscription {
  newMessage {
    text
    from
  } 
}
`;