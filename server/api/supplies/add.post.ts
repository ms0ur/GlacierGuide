import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event)
        const session = await getUserSession(event)
        if(!session) return null
        if(!body.typel) return null
        if(!session.user) return null
        if(body.typel == 'supply'){
            const result = await supplies.addSupply(
                body.name,
                body.quantity,
                body.measurement,
                body.date,
                body.expiryDate,
                body.category,
                body.type,
                eval('session.user.id')
            )
            console.log(result)
            return result
        } else if(body.typel == 'category'){
            const result = await supplies.addCategory(body.name, body.type)
            return result
        } else if(body.typel == 'type'){
            const result = await supplies.addType(body.name, body.category)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})