
export default class UserDto {
    id: string
    email: string
    password: string

    constructor(model: any) {
        this.id = String(model._id)
        this.email = model.email
        this.password = model.password
    }
}