export const getUsers = (state) => {
    return state.pageUsers.users;
}

export const gePageCount = (state) => {
    return state.pageUsers.pageCount
}

export const getCurrentPage = (state) => {
    return state.pageUsers.currentPage;
}

export const getTotalUsersCount = (state) => {
    return state.pageUsers.totalUsersCount;
}

export const getIsLoading = (state) => {
    return state.pageUsers.isLoading;
}

export const getFollowingInProgress = (state) => {
    return state.pageUsers.followingInProgress;
}