import axios from 'axios'

export const API = axios.create({
    baseURL: "http://192.168.18.180:5000/api/v1/"
})