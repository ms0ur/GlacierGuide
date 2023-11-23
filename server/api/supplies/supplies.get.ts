import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const option = Number(getRouterParam(event, 'option'))
        if (!option) return null
        if (option == 0) {
            return null
        } else if (option == 1) {
            const id = getRouterParam(event, 'userId')
            if (!id) return null
            const result = await supplies.getSortedSuppliesByName(id, Number(getRouterParam(event, 'limit') || 10), false)
            return result
        } else if (option == 2) {
            const id = getRouterParam(event, 'id')
            if (!id) return null
            const result = await supplies.getSupplyById(id)
            return result
        } else {
            const id = getRouterParam(event, 'userId')
            if (!id) return null
            const result = await supplies.getSortedSuppliesByName(id, Number(getRouterParam(event, 'limit') || 10), true)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
