import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
})

axiosInstance.get()

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  }
}