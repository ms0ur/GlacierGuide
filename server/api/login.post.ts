import UserController from "../controller/user.controller"
const User = new UserController()
export default defineEventHandler(async (event) => {
    try {
        const user = await User.login(event)
        if(user && user.additionalContext && 'user' in user.additionalContext){
            await setUserSession(event, {
                user: {
                    id: user.additionalContext.user.id,
                    email: user.additionalContext.user.email,
                    name: user.additionalContext.user.name,
                    loggedInAt: new Date()
                },
                id: user.additionalContext.user.id,
                email: user.additionalContext.user.email,
                name: user.additionalContext.user.name,
                loggedInAt: new Date()
            })
            return user
        }
        return user
    } catch (error) {
        console.log(error)
        return error
    }
})