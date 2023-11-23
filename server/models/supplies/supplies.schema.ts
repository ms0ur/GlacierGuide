import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Supplies{
    name: string,
    quantity: number,
    measurement: number, // 0-гр, 1-литры, 2-штуки, 3-др
    date: Date,
    dateExpiry: Date,
    category: Schema.Types.ObjectId,
    type: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId
}

export default defineMongooseModel<Supplies>('Supplies',{
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    measurement: {
        type: Number, // 0-гр, 1-литры, 2-штуки, 3-др
        enum: [0, 1, 2, 3],
        default: 3
    },
    date: {
        type: Date
    },
    dateExpiry: {
        type: Date
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'SuppliesCategories'
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'SuppliesTypes'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})