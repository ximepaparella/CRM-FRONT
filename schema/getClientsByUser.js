import { gql } from "@apollo/client";

export const GET_CLIENTS_BY_USER = gql`
  query getClientByVendor {
    getClientByVendor {
      id
      name
      lastName
      email
    }
  }
`;
