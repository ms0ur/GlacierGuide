import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Recipes {
    name: string,
    supplies: Schema.Types.ObjectId[],
    user: Schema.Types.ObjectId,
}

export default defineMongooseModel<Recipes>('Recipes', {
    name: String,
    supplies: {
        type: [Schema.Types.ObjectId],
        ref: 'Supplies',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
})