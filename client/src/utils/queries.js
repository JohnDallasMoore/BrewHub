import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            firstName
            lastName
            email
            password
            createdAt
            statusCount
            statuses {
                _id
                statusText
                createdAt
            }
            reviewCount
            reviews {
                _id
                reviewText
                createdAt
            }
            commentCount
            comments {
                _id
                commentText
                createdAt
            }
        }
    }
    `;

export const QUERY_USER = gql`
    query user($id: ID!) {
        user(id: $id) {
            _id
            firstName
            lastName
            email
            password
            createdAt
            statusCount
            statuses {
                _id
                statusText
                createdAt
            }
            reviewCount
            reviews {
                _id
                reviewText
                createdAt
            }
            commentCount
            comments {
                _id
                commentText
                createdAt
            }
        }
    }
    `;

export const QUERY_STATUSES = gql`
    query allStatuses {
        statuses {
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

export const QUERY_STATUS = gql`
    query status($id: ID!) {
        status(id: $id) {
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

export const QUERY_REVIEWS = gql`
    query allReviews {
        reviews {
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

export const QUERY_REVIEW = gql`
    query review($id: ID!) {
        review(id: $id) {
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

export const QUERY_COMMENTS = gql`
    query allComments {
        comments {
            _id
            commentText
            createdAt
            username
        }
    }
    `;

export const QUERY_COMMENT = gql`
    query comment($id: ID!) {
        comment(id: $id) {
            _id
            commentText
            createdAt
            username
        }
    }
    `;

