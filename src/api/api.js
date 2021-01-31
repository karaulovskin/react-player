import * as axios from "axios";

export const userAPI = {
    getUser(currentPage, pageCount) {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageCount}`, {
                withCredentials: true,
            })
        )
    }
}