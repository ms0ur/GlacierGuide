import { Schema } from "mongoose";
import suppliesCategoriesSchema from "../models/supplies/suppliesCategories.schema";
import suppliesSchema from "../models/supplies/supplies.schema";
import suppliesTypesSchema from "../models/supplies/suppliesTypes.schema";


export default class SuppliesService {

    addCategory(name: string, type: number): any{
        try {
            const result = suppliesCategoriesSchema.create({name: name, type: type})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    /**
     * Retrieves categories by type.
     *
     * @param {number} type - The type of category.
     * @param {number} limit - The maximum number of categories to retrieve.
     * @return {any} The categories that match the given type and limit.
     */
    getCategoriesByType(type: number, limit: number): any{
        try {
            const result = suppliesCategoriesSchema.find({type: type}).limit(limit).sort({name: 1})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Retrieves a category by its ID.
     *
     * @param {Schema.Types.ObjectId} id - The ID of the category.
     * @return {any} The category with the specified ID, or null if it doesn't exist or an error occurred.
     */
    getCategorieById(id: string): any{
        try {
            const result = suppliesCategoriesSchema.findById(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Searches for categories by name.
     *
     * @param {string} name - The name to search for.
     * @return {any} The result of the search.
     */
    searchCategoriesByName(name: string, limit: number): any{
        try {
            const result = suppliesCategoriesSchema.find({name: new RegExp(name, 'i')}).limit(limit)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    addType(name: string, category: string): any{
        try {
            const result = suppliesTypesSchema.create({name: name, category: category})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Retrieves a document from the suppliesTypesSchema collection by its ID.
     *
     * @param {Schema.Types.ObjectId} id - The ID of the document to retrieve.
     * @return {any} The retrieved document, or null if an error occurred.
     */
    getTypeById(id: string): any{
        try {
            const result = suppliesTypesSchema.findById(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    /**
     * Search types by name.
     *
     * @param {string} name - The name to search for.
     * @return {any} The result of the search.
     */
    searchTypesByName(name: string, category: string, limit: number): any{
        try {
            const result = suppliesTypesSchema.find({name: new RegExp(name, 'i'), category: category}).limit(limit)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }


/**
 * Adds a new supply to the database.
 *
 * @param {number} quantity - The quantity of the supply.
 * @param {number} measurement - The measurement unit of the supply. 0-гр, 1-литры, 2-штуки, 3-др
 * @param {Date} date - The date when the supply was added.
 * @param {Date} expiryDate - The expiry date of the supply.
 * @param {string} category - The category of the supply.
 * @param {string} type - The type of the supply.
 * @param {string} user - The user who added the supply.
 * @return {any} The result of creating the supply in the database.
 */
addSupply(
    name: string,
    quantity: number, 
    measurement: number, 
    date: Date, 
    expiryDate: Date, 
    category: string, 
    type: string, 
    user: string
    ): any {
    try {
        const supply = {
            name: name,
            quantity: quantity,
            measurement: measurement,
            date: date,
            expiryDate: expiryDate,
            category: category,
            type: type,
            user: user
        };
        console.log(supply);
        const result = suppliesSchema.create(supply);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


    /**
     * Retrieves a document from the suppliesSchema collection by its ID.
     *
     * @param {Schema.Types.ObjectId} id - The ID of the document to retrieve.
     * @return {any} The retrieved document, or null if an error occurred.
     */
    getSupplyById(id:string): any{
        try {
            const result = suppliesSchema.findById(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getSortedSuppliesByName(userId: string, limit: number, decending: boolean): any{
        try {
            const result = suppliesSchema.find({user: userId}).sort({name: decending ? -1 : 1}).limit(limit)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getSortedSuppliesByExpiryDate(userId: string, limit: number, decending: boolean): any{
        try {
            const result = suppliesSchema.find({user: userId}).sort({expiryDate: decending ? -1 : 1}).limit(limit)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

}