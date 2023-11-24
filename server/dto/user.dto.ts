
export default class UserDto {
    id: string
    email: string
    name: string

    constructor(model: any) {
        this.id = String(model._id)
        this.email = model.email
        this.name = model.name
    }
}