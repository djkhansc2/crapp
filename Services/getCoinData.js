const axios = require('axios');

const getCoinData = async (coinId) => {
    try {
        let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        return response.data
    }
    catch(error) {
        console.log('error', error)
    }
}

export default getCoinData;