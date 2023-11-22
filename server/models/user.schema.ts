import { defineMongooseModel } from '#nuxt/mongoose'

interface User {
  email: string
  password: string
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
})