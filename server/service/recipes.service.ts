import {Schema} from 'mongoose'

import RecipesSchema from '../models/recipes/recipes.schema';


export class RecipesService {
    addRecipe(name: string, description: string, ingredients: Schema.Types.ObjectId[], steps: string[], user: Schema.Types.ObjectId){
        try {
            const result = RecipesSchema.create({name: name, description: description, ingredients: ingredients, steps: steps, user: user})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getRecipeById(id: string): any{
        try {
            const result = RecipesSchema.findById(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getRecipes(limit: number): any{
        try {
            const result = RecipesSchema.find().limit(limit || 10)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getRecipesByUser(userId: string, limit: number): any{
        try {
            const result = RecipesSchema.find({user: userId}).limit(limit || 10)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getRecipesByName(name: string, limit: number): any{
        try {
            const result = RecipesSchema.find({name: new RegExp(name, 'i')}).limit(limit || 10)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }




}