import { gql } from "@apollo/client";
export const CREATE_POST = gql`
  mutation createPost($Name: String, $Email: String, $Phone: String, $DOB: String) {
    createPost(post: { Name: $Name, Email: $Email, Phone:$Phone, DOB:$DOB }) {
      id
      Name
      Email
      Phone
      DOB
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String) {
    deletePost(id: $id)
  }
`;