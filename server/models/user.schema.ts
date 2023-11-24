import { defineMongooseModel } from '#nuxt/mongoose'

interface User {
  email: string
  password: string,
  name: string,
  createdAt: Date
}

export const UserSchema= defineMongooseModel<User>('User', {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})