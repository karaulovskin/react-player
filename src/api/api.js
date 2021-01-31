import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6171875f-9529-41c8-9e0f-66680e8c72a6',
    }
})

export const userAPI = {
    getUser(currentPage, pageCount) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageCount}`)
                .then(response => {
                    return response.data;
                })
        )
    },
    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => {
                    return response.data;
                })
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => {
                    return response.data;
                })
        )
    },
}