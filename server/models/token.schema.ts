import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Token {
  userID: Schema.Types.ObjectId
  tokens: [
    {
      accessToken: string
      refreshToken: string
      userAgent: string
      lastTimeUsed: Date
    }
  ]
}

export const TokenSchema= defineMongooseModel<Token>('Token', {
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tokens: {
    type: [{
      type: {
      accessToken: String,
      refreshToken: String,
      userAgent: String,
      lastTimeUsed: Date,
    }
  }],
    required: true,
  },
})