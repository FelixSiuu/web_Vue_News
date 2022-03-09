import axios from 'axios'

// create axios obj
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default request
