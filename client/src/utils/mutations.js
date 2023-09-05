import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $password: String!
    $email: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_STATUS = gql`
  mutation addStatus(
    $content: String!
    $image: String
    $likes: Int!
  ) {
    addStatus(
      content: $content
      image: $image
      likes: $likes
    ) {
      _id
      content
      image
      likes
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview(
  $title: String!
  $content: String!
  $rating: Float!
  $image: String
  $likes: Int!
) {
  addReview(
    title: $title
    content: $content
    rating: $rating
    image: $image
    likes: $likes
  ) {
    _id
    title
    content
    rating
    image
    likes
    
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $content: String!
  ) {
    addComment(
      content: $content
    ) {
      _id
      content
    }
  }
`;

// export const UPLOAD_IMAGE = gql `
//   mutation uploadImage(
//     $imageData: File  
//   ) {
//     uploadImage(
//         file: $imageData
//     ) {
//         status
//     }
//   }

// `;