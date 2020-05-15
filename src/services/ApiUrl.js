import axios from 'axios'
import axiosJson from 'axios-jsonp'

const baseURL = 'https://www.receitaws.com.br/v1/cnpj'

const apiUrl = axios({
  baseURL,
  adapter: axiosJson,
  timeout: 5000
})

export default apiUrl
