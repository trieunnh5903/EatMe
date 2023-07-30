
import axios from "axios";

const FOOD_API = {
    fetchAllFood: async (pageNumber) => {
        try {
            const res = await axios.get(`/api/v1/foods/${pageNumber}`);
            console.log(res.status);
            return res.data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
export default FOOD_API;