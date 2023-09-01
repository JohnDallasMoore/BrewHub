import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
    `;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                email
            }
        }
    }
    `;

export const ADD_STATUS = gql`
    mutation addStatus($statusText: String!) {
        addStatus(statusText: $statusText) {
            _id
            statusText
            createdAt
            username
            commentCount
            comments {
                _id
                createdAt
                username
                commentText
            }
        }
    }
    `;

export const ADD_REVIEW = gql`
    mutation addReview($reviewText: String!) {
        addReview(reviewText: $reviewText) {
            _id
            reviewText
            createdAt
            username
            commentCount
            comments {
                _id
                createdAt
                username
                commentText
            }
        }
    }
    `;

export const ADD_COMMENT = gql`
    mutation addComment($statusId: ID!, $commentText: String!) {
        addComment(statusId: $statusId, commentText: $commentText) {
            _id
            commentCount
            comments {
                _id
                commentText
                createdAt
                username
            }
        }
    }
    `;

