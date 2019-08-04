import {
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCEEDED,
    USERS_FETCH_FAILED
} from "../action-types";

export const requestUsers = () => ({
    type: USERS_FETCH_REQUESTED
});

export const requestUsersSuccess = (data) => ({
    type: USERS_FETCH_SUCCEEDED,
    users: data
});

export const requestUsersFail = () => ({
    type: USERS_FETCH_FAILED
});