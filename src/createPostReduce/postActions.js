import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const page = 0
const limit = 4

export function getList() {
    const request = axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`)
    return {
        type: 'POST_FETCHED',
        payload: request
    }
}
