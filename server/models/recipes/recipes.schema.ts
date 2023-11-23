import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Recipes {
    name: string,
    description: string,
    ingredients: Schema.Types.ObjectId[],
    steps: string[],
    user: Schema.Types.ObjectId
}

export default defineMongooseModel<Recipes>('Recipes', {
    name: String,
    description: String,
    ingredients: {
        type: [Schema.Types.ObjectId],
        ref: 'SuppliesTypes',
    },
    steps: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})