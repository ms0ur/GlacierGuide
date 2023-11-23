import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const option = Number(getRouterParam(event, 'option'))
        if (!option) return null
        if (option == 0) {
            return null
        } else if (option == 1) {
            const name = getRouterParam(event, 'name')
            if (!name) return null
            const result = await supplies.searchTypesByName(name, Number(getRouterParam(event, 'limit') || 10))
            return result
        } else {
            const id = getRouterParam(event, 'id')
            if (!id) return null
            const result = await supplies.getTypeById(id)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
