const typeDefs = `
type User {
    _id: ID!
    name: String!
    password: String!
    email: String! 
    badges: Int 
    statuses: [Status]
    reviews: [Review]
}


type Query {


}

type Mutation {



}
`;

module.exports = typeDefs; 