import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const option = Number(getRouterParam(event, 'option'))
        if (!option) return null
        if (option == 0) {
            const type = getRouterParam(event, 'type')
            if (!type) return null
            const result = await supplies.getCategoriesByType(Number(type), Number(getRouterParam(event, 'limit')) || 10)
            return result
        } else if (option == 1) {
            const name = getRouterParam(event, 'name')
            if (!name) return null
            const result = await supplies.searchCategoriesByName(name, Number(getRouterParam(event, 'limit') || 10))
            return result
        } else {
            const id = getRouterParam(event, 'id')
            if (!id) return null
            const result = await supplies.getCategorieById(id)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
