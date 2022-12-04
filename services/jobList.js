import { apiRequest } from "../utils/api"

export const fetchJobList = (params) =>
    apiRequest({
        method: 'GET',
        path: '/positions.json',
        params
    })

export const fetchJobDetail = (id) =>
    apiRequest({
        method: 'GET',
        path: `/positions/${id}`,
    })