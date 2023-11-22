import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface SuppliesCategories {
    name: string,
    description: string,
    subCategories: string[]
}