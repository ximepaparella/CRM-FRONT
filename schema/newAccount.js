import { gql } from "@apollo/client";

export const NEW_ACCOUNT = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastName
      email
      institutionName
    }
  }
`;
