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
            const name = String(query.name)
            const category = String(query.category)
            if (!name || !category) return null
            const result = await supplies.searchTypesByName(name, category, Number(query.limit || 10))
            return result
        } else {
            const id = String(query.id)
            if (!id) return null
            const result = await supplies.getTypeById(id)
            return result
        }
    } catch (error) {
        console.log(error)
    }
})
