import { gql } from "@apollo/client";

export const NEW_CLIENT = gql`
  mutation newClient($input: ClientInput) {
    newClient(input: $input) {
      id
      name
      lastName
      email
      institutionName
      country
      jobPosition
      status
      role
    }
  }
`;
