const { gql } = require('apollo-server-express');

module.exports = gql`

  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    lists: [List!]
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    user(id: Int!): User
    allUsers: [User!]!
    me: User
  } 

  extend type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;