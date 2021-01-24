const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageCount: 10,
    currentPage: 100,
    totalUsersCount: 0,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        default:
            return state;
    }
}

export const followUsersAС = (userId) => (
    {type: FOLLOW, userId: userId}
);
export const unfollowUsersAС = (userId) => (
    {type: UNFOLLOW, userId: userId}
);
export const setUsersAС = (users) => (
    {type: SET_USERS, users: users}
);
export const setCurrentPageAС = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage: currentPage}
);
export const setTotalUsersCountAС = (totalCount) => (
    {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount}
);

export default usersReducer;