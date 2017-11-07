import {combineReducers} from 'redux'
import Actions from "../actions";

const users = (state = [], action) => {
    switch (action.type) {
        case Actions.ADD_USER:
            return [
                ...state,
                action.user
            ];
        case Actions.DELETE_USER:
            return state.filter((user) => user.id !== action.id);
        case Actions.UPDATE_USER:
            return state.map(user =>
                (user.id === action.user.id)
                    ? action.user
                    : user
            );
        case Actions.SET_USERS:
            return action.users;
        default:
            return state
    }
};

const usersApp = combineReducers({
    users
});

export default usersApp
