const typeDefs = `


type User {
    _id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String! 
    statuses: [Status]
    reviews: [Review]
    comments: [Comment]
    badges: [Badge]
}

type Review {
    _id: ID 
    title: String! 
    content: String! 
    rating: Float! 
    image: String 
    likes: Int! 
    comments: [Comment]
    user: User
}


type Status {
    _id: ID! 
    content: String! 
    image: String
    likes: Int! 
    comments: [Comment]
    user: User
}

scalar Upload

type File {
    userId: ID! 
    fileName: String!
    dataStream: Upload 
}

type Comment {
    _id: ID! 
    content: String!
    user: User
    review: Review
    status: Status
}

type Badge {
    _id: ID!
    name: String!
    image: String
    content: String!
    user: User
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
    users: [User]
    statuses: [Status]
    reviews: [Review]
    comments: [Comment]
    getUserById(id: String!): User
    getStatusById(id: String!): Status
    getReviewById(id: String!): Review 
    getCommentById(id: String!): Comment
}

type Mutation {
    login(email: String!, password: String!): Auth

    
    addUser(firstName: String!,
        lastName: String!,
        password: String!,
        email: String!): Auth

    addStatus(content: String!, 
        image: String,
        likes: Int!): Status

    addReview(title: String!,
        content: String!,
        rating: Float!, 
        image: String,
        likes: Int!): Review

    addComment(content: String!): Comment

    updateUser(
        id: ID!,
        firstName: String!,
        lastName: String!,
        password: String!,
        email: String!): User

    updateReview(
        id: ID!,
        title: String!,
        content: String!,): Review

    updateComment(
        id: ID!,
        content: String!,): Comment
}

`;

module.exports = typeDefs; 