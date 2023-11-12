import axios from 'axios'

const host = import.meta.env.VITE_BACKEND_HOST
const port_pot = import.meta.env.VITE_BACKEND_PORT
const port = port_pot ? `:${port_pot}` : port_pot

const axiosInstance = axios.create({
  baseURL: `${host}${port}/`,
  withCredentials: true
})

export default axiosInstance
