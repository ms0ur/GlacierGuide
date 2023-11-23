import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const option = Number(query.option)
        console.log(option)
        if (!option) return null
        if (option == 0) {
            const type = query.type
            if (!type) return null
            const result = await supplies.getCategoriesByType(Number(type), Number(query.limit) || 10)
            return result
        } else if (option == 1) {
            const name = query.name
            if (!name) return null
            const result = await supplies.searchCategoriesByName(String(name), Number(query.limit) || 10)
            return result
        } else {
            const id = query.id
            if (!id) return null
            const result = await supplies.getCategorieById(String(id))
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
