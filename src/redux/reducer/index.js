import {
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCEEDED,
    USERS_FETCH_FAILED
} from "../action-types";

const initialState = {
    isLoaded: false,
    isError: false,
    users: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case USERS_FETCH_REQUESTED:
            return {
                isLoaded: false,
                isError: false,
                users: []
            };
        case USERS_FETCH_SUCCEEDED:
            const { users } = action;
            return {
                isLoaded: true,
                isError: false,
                users
            };
        case USERS_FETCH_FAILED:
            return  {
                isLoaded: false,
                isError: true,
                users: []
            };
        default:
            return state;
    }
}

export default rootReducer;