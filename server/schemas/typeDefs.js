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

type UploadResponse {
    status: String! 
}

type Status {
    _id: ID! 
    content: String! 
    image: String!
    likes: Int! 
    comments: [Comment]
}

type File {
    fileName: String!
    dataStream: String! 
}

type Comment {
    _id: ID! 
    content: String!
}

type Auth {
    token: ID!
    user: User
  }

type Query {
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
        image: String!,
        likes: Int!): Status

    addReview(title: String!,
        content: String!,
        rating: Int!, 
        image: String!,
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
        tittle: String!,
        content: String!,): Review

    updateComment(
        id: ID!,
        content: String!,): Comment

    uploadImage(
        imageData: File): UploadResponse


}

`;

module.exports = typeDefs; 