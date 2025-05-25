let API="https://6821ee72b342dce8004c6739.mockapi.io/User"
import getUser  from "./doc.js"

async function get() {
    try {
        let res=await axios.get(API)
        getUser(res.data)
    } catch (error) {
        
    }
}

export default get