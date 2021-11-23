import { gql } from "@apollo/client";

export const getALL = gql`
  {
    getAll {
      id
      Name
      Email
      Phone
      DOB
    }
  }
`;
