import { get, post } from './http'
export const first = (data={}) => get('/first',data)