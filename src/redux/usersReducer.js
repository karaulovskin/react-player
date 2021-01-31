import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageCount: 10,
    currentPage: 100,
    totalUsersCount: 0,
    isLoading: false,
    followingInProgress: []
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
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    // eslint-disable-next-line eqeqeq
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => (
    {type: FOLLOW, userId: userId}
);
export const unfollow = (userId) => (
    {type: UNFOLLOW, userId: userId}
);
export const setUsers = (users) => (
    {type: SET_USERS, users: users}
);
export const setCurrentPage = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage: currentPage}
);
export const setTotalUsersCount = (totalCount) => (
    {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount}
);
export const toggleIsLoading = (isLoading) => (
    {type: TOGGLE_IS_LOADING, isLoading: isLoading}
);
export const toggleFollowingProgress= (isFetching, userId) => (
    {type: TOGGLE_FOLLOWING_PROGRESS, isFetching: isFetching, userId:userId}
);

export const getUsersThankCreator = (currentPage, pageCount) => {
    return  (dispatch) => {
        dispatch(toggleIsLoading(true));
        userAPI.getUser(currentPage, pageCount)
            .then(data => {
                dispatch(toggleIsLoading(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}
export const followThankCreator = (userId) => {
    return  (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollowThankCreator = (userId) => {
    return  (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}


export default usersReducer;