const { Sneakers_list } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Mutation: {
    async createList(_, { name, sneakers_sku }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a list')
      }
      return Sneakers_list.createList({
        userId: user.id,
        
        name
      })
    }
  }
}
