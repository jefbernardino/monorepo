import Axios from 'axios'

const axiosPublic = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
})

export default axiosPublic
