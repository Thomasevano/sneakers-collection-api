const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../database/models');
require('dotenv').config();

module.exports = {
  Query: {
    async me(_, args, { user }) {
      if(!user) throw new Error('You are not authenticated')
      return await User.findByPk(user.id)
    },
    async user(root, { id }, { user }) {
      try {
        if(!user) throw new Error('You are not authenticated!')
        return User.findByPk(id)
      } catch (error) {
        throw new Error(error.message)
      }
    },
    async allUsers(root, args, { user }) {
      try {
        if (!user) throw new Error('You are not authenticated!')
        return User.findAll()
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },
  Mutation: {
    async register(root, { username, email, password }, context) {
      // const { username, email, password } = args.input;
      try {
        const user = await User.create({ username, email, password });
        const token = jwt.sign({ id: user.id, email:user.email }, process.env.JWT_SECRET, {expiresIn: '1y' })
        return { token, id: user.id, username: user.username, email: user.email, message: "Authentication successfull"}
      }
      catch (error) {
        throw new Error(error.message);
      }
    },

    async login(root, { email, password }, context) {
      // const { email, password } = input;
      try {
        const user = await User.findOne({ where: { email } });
        if(!user) {
          throw new Error('No user with that email');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
          throw new Error('Incorrect password');
        }
        // return jwt
        const token = jwt.sign({ id: user.id, email:user.email }, process.env.JWT_SECRET, {expiresIn: '1w' });

        return { token, user};
      }
      catch (error) {
        throw new Error(error.message);
      }
    }
  },
};