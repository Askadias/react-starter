import {combineReducers} from 'redux'
import tasks from "./tasks";
import visibilityFilter from "./visibilityFilter";
import users from "./users";

export const tasksApp = combineReducers({
    tasks,
    visibilityFilter
});

export const usersApp = combineReducers({
    users
});
