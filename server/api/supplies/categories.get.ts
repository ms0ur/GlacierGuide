import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {

        // Get the query parameters
        const query = getQuery(event)
        const selectedOption = Number(query.option)

        // Handle the selected option
        if (!selectedOption) return null

        if (selectedOption === 0) {
            // Get categories by type
            const categoryType = query.type
            if (!categoryType) return null
            const result = await supplies.getCategoriesByType(Number(categoryType), Number(query.limit) || 10)
            return result
        } else if (selectedOption === 1) {
            // Search categories by name
            const categoryName = query.name
            if (!categoryName) return null
            const result = await supplies.searchCategoriesByName(String(categoryName), Number(query.limit) || 10)
            return result
        } else {
            // Get category by ID
            const categoryId = query.id
            if (!categoryId) return null
            const result = await supplies.getCategorieById(String(categoryId))
            return result
        }
    } catch (error) {
        console.log(error)
    }
})