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
    title: String! 
    content: String! 
    image: String!
    likes: Int! 
    comments: [Comment]
}

type Comment {
    _id: ID! 
    date: Int!
    content: String!
}

type Query {
    users: [User]
    statuses: [Status]
    reviews: [Review]
    comments: [Comment]
}
`;

module.exports = typeDefs; 