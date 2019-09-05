import { get, post } from './http'
let baseUrl = ''
export const first = (data={}) => get(`${baseUrl}/first`,data)