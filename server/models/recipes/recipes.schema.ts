import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Recipes {
    name: string,
    description: string,
    ingredients: Schema.Types.ObjectId[],
    user: Schema.Types.ObjectId
}

export const recipesSchema = defineMongooseModel<Recipes>('Recipes', {
    name: String,
    description: String,
    ingredients: [Schema.Types.ObjectId],
    user: Schema.Types.ObjectId
})