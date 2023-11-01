import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      image
      statuses {
        _id
        content
        image
        likes
      }
      reviews {
        _id
        title
        content
        rating
        likes
      }
      comments {
        _id
        content
      }
      badges {
        _id
        name
        image
        content
      }
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
      image
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const GET_STATUSES = gql`
  query statuses {
    statuses {
      _id
      content
      image
      likes
      userName
    }
  }
`;

export const GET_STATUS_BY_ID = gql`
  query getStatusById($id: String!) {
    getStatusById(id: $id) {
      _id
      content
      image
      likes
    }
  }
`;

export const GET_REVIEWS = gql`
  query reviews {
    reviews {
      _id
      title
      content
      rating
      likes
      image
      userName
    }
  }
`;

export const GET_REVIEW_BY_ID = gql`
  query getReviewById($id: String!) {
    getReviewById(id: $id) {
      _id
      title
      content
      rating
      image
      likes
    }
  }
`;

export const GET_COMMENTS = gql`
  query comments {
    comments {
      _id
      content
    }
  }
`;

export const GET_COMMENT_BY_ID = gql`
  query getCommentById($id: String!) {
    getCommentById(id: $id) {
      _id
      content
    }
  }
`;