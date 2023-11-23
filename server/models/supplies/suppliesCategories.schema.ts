import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface SuppliesCategories {
    name: String,
    type: Number,
}


export default defineMongooseModel<SuppliesCategories>('SuppliesCategories', {
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number, // 1 - еда, 2 - напитки, 3 - медикаменты, 4- другое
        required: true,
        default: 4
    }
})