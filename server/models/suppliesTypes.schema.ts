import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface SuppliesTypes {
    name: String,
    category: Schema.Types.ObjectId,
}

export default defineMongooseModel<SuppliesTypes>('SuppliesTypes', {
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'SuppliesCategories',
        required: true
    },
})