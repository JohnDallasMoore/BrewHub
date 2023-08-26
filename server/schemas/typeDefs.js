const typeDefs = `
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String! 
    statuses: [Status]
    reviews: [Review]
}

type Review {
    _id: ID! 
    title: String! 
    content: String! 
    rating: Int! 
    image: String! 
    likes: Int! 
    comments: [Comment]

}

type Status {
    _id: ID! 
    content: String! 
    image: String!
    likes: Int! 
    comments: [Comment]
}

type Comment {
    _id: ID! 
    content: String!
}

type Query {
    users: [User]
    statuses: [Status]
    reviews: [Review]
    comments: [Comment]
    getUserById(id: String!): User
    getStatusById(id: String!): Status
    getReviewById(id: String!): Review 
}

type Mutation {
    addUser(firstName: String!,
        lastName: String!,
        password: String!,
        email: String!): User

    addStatus(content: String!, 
        image: String!,
        likes: Int!): Status

    addReview(title: String! 
        content: String! 
        rating: Int! 
        image: String! 
        likes: Int!): Review

    addComment(content: String!): Comment
}

`;

module.exports = typeDefs; 