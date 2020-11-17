import axios from 'axios'

export const baseURL = process.env.REACT_APP_BASE_BACK_URL
// export const baseURL = 'http://31.131.28.206:8008/'
// export const baseURL = 'http://127.0.0.1:8000/'

console.log('baseURL:', baseURL)

export const instance = axios.create({
    baseURL,
    // withCredentials: true,
})
