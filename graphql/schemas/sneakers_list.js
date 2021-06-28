const { gql } = require('apollo-server-express');

module.exports = gql `

  type List {
    id: Int!
    name: String!
    sneakers_sku: [String!]
    owner: User!
    createdAt: String
  }
  
  extend type Query {
    getAllLists: [List!]
    getSingleList(listId: Int!): List
  }

  extend type Mutation {
      createList(name: String!, sneakers_sku: [String!]): CreateListResponse
  }

  type CreateListResponse {
      id: Int!
      name: String!
      sneakers_sku: [String!]
      createdAt: String!
  }
`;