
import {UserSchema} from '../models/user.schema'

export default class UserService {

    /**
     * Registers a new user with the given email and password.
     *
     * @param {string} email - The email of the user.
     * @param {string} password - The hashed password of the user.
     * @return {Promise<UserSchema | null>} - True if the user was registered successfully, or null if an error occurred.
     */
    async register(email : string, password : string): Promise<any> {
        try {
            const user = await new UserSchema ({
                email: email,
                password: password
            }).save()

            return user;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    /**
     * Check if a user exists based on their email.
     *
     * @param {string} email - The email of the user to check.
     * @return {Promise<boolean|null>} Returns a promise that resolves to a boolean indicating whether the user exists or not. 
     * If there is an error, it returns null.
     */
    async isUserExists(email : string): Promise<boolean | null> {
        try {
            if(await UserSchema.findOne({email})){
                return true;
            } else {
                return false;
            }
    
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    /**
     * Check if the user's password matches the provided email.
     *
     * @param {string} email - The email of the user.
     * @param {string} password - Hashed password to check.
     * @return {Promise<boolean | null>} A promise that resolves to a boolean indicating whether the password matches the email, or null if an error occurs.
     */
    async checkUserPassword(email : string, password : string): Promise<boolean | null> {
        try {
            if(await UserSchema.findOne({email, password})){
                return true;
            } else {
                return false;
            }
    
        } catch (error) {
            console.log(error)
            return null;
        }
    }


    async findUser(email : string): Promise<any | null> {
        try {
            if(await UserSchema.findOne({email})){
                return await UserSchema.findOne({email});
            } else {
                return false;
            }
    
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}