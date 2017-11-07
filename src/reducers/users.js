import {ADD_USER, DELETE_USER, SET_USERS, UPDATE_USER} from "../actions/actionTypes";

const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.user
            ];
        case DELETE_USER:
            return state.filter((user) => user.id !== action.id);
        case UPDATE_USER:
            return state.map(user =>
                (user.id === action.user.id)
                    ? action.user
                    : user
            );
        case SET_USERS:
            return action.users;
        default:
            return state
    }
};

export default users;
