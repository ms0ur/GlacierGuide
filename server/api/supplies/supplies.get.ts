import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const option = Number(query.option)
        if (!option) return null
        if (option == 0) {
            return null
        } else if (option == 1) {
            const id = String(query.id)
            if (!id) return null
            const result = await supplies.getSortedSuppliesByName(id, Number(query.limit || 10), false)
            return result
        } else if (option == 2) {
            const id = String(query.id)
            if (!id) return null
            const result = await supplies.getSupplyById(id)
            return result
        } else {
            const userId = String(query.userId)
            if (!userId) return null
            const result = await supplies.getSortedSuppliesByName(userId, Number(query.limit || 10), true)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
