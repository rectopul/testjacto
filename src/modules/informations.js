const axios = require('axios')

const informations = (async () => {
    //private var/functions
    const request = await axios.get(`https://jacto.com/api/v1/products/132`)

    function topImage() {
        return request.data
    }
    
    return {
        //public var/functions
        topImage
    }
})()




module.exports = {

    async topImage() {
        return JSON.stringify(informations.topImage)
    }
}
