import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const page = 0
const limit = 4
export function getListPost(){
    const request = axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`)
    return {
        type: 'GET_LIST_POST',
        payload: request
    }
}