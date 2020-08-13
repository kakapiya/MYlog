import axios from 'axios'

export function request(config) {

    const instance = axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/',
        timeout: 5000
    })
    return instance(config)

}