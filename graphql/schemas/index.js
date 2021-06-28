const { gql } = require('apollo-server-express');
const userType = require('./user');
const listType = require('./sneakers_list');

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [rootType, userType, listType];