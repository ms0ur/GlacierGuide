

import * as bcrypt from 'bcrypt';
import UserService from '../service/user.service';
import UserDto from '../dto/user.dto';



const User = new UserService();


export default class UserController {
    async register(event : any){
        const body = await readBody(event)

        if (!body.email || !body.password || !body.name) {
            return {
                status: false,
                errorCode: 1,
                errorName: {
                    en: 'Missing required fields',
                    ru: 'Незаполнены необходимые поля'
                },
                additionalContext: null
            }
        }

        //checking if user already exists
        if(await User.isUserExists(body.email)){
            return {
                status: false,
                errorCode: 2,
                errorName: {
                    en: 'User already exists',
                    ru: 'Пользователь уже существует'
                },
                additionalContext: null
            }
        }


        //hashing password
        const hashedPassword = await bcrypt.hash(body.password, 10)
        const userDb = await User.register(body.email, hashedPassword, body.name)
        //registering new user
        if(userDb){
            return {
                status: true,
                errorCode: 0,
                errorName: null,
                additionalContext: {
                    user: new UserDto(userDb)
                }
            }
        }
    }
    async login(event: any) {
        const body = await readBody(event);
        
        if (!body.email || !body.password) {
            return {
                status: false,
                errorCode: 1,
                errorName: {
                    en: 'Missing required fields',
                    ru: 'Незаполнены необходимые поля'
                },
                additionalContext: null
            };
        }
        
        const userDb = await User.findUser(body.email);
        
        if (!userDb || userDb == undefined) {
            return {
                status: false,
                errorCode: 2,
                errorName: {
                    en: 'User not exists or wrong password',
                    ru: 'Пользователь не существует или неверный пароль'
                },
                additionalContext: null
            };
        }
        
        const isPasswordValid = await bcrypt.compare(body.password, userDb.password);
        
        if (isPasswordValid == true) {     
            
            return {
                status: true,
                errorCode: 0,
                errorName: null,
                additionalContext: {
                    user: new UserDto(userDb)
                }
            };
        }

        return {
            status: false,
            errorCode: 2,
            errorName: {
                en: 'User not exists or wrong password',
                ru: 'Пользователь не существует или неверный пароль'
            },
            additionalContext: null
        };
    }
}