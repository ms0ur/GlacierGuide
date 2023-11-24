import SuppliesService from "~/server/service/supplies.service"
const supplies = new SuppliesService()

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const session = await getUserSession(event)
        const selectedOption = Number(query.option)

        if (selectedOption == 0) {
            // Option 0: Do nothing and return null
            return null
        } else if (selectedOption == 1) {
            // Option 1: Get sorted supplies by name
            const id = String(query.id)
            if (!id) return null
            const limit = Number(query.limit || 10)
            const result = await supplies.getSortedSuppliesByName(id, limit, false)
            return result
        } else if (selectedOption == 2) {
            // Option 2: Get supply by ID
            const id = String(query.id)
            if (!id) return null
            const result = await supplies.getSupplyById(id)
            return result
        } else if (selectedOption == 3) {
            // Other options: Get sorted supplies by user ID
            const userId = eval('session.user.id')
            if (!userId) return null
            const limit = Number(query.limit || 10)
            const result = await supplies.getSortedSuppliesByName(userId, limit, true)
            return result
        } else {
            // Option 4: Get sorted supplies by expiry date
            const userId = eval('session.user.id')
            if (!userId) return null
            const limit = Number(query.limit || 10)
            const result = await supplies.getSortedSuppliesByExpiryDate(userId, limit, true)
            return result
        }
    } catch (error) {
        // Handle any errors
        console.log(error)
    }
})