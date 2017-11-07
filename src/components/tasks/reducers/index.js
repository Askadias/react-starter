import {combineReducers} from 'redux'
import Actions from "../actions";

const tasks = (state = [], action) => {
    switch (action.type) {
        case Actions.ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case Actions.TOGGLE_TASK:
            return state.map(task =>
                (task.id === action.id)
                    ? {...task, completed: !task.completed}
                    : task
            );
        case Actions.SET_TASKS:
            return action.tasks;
        default:
            return state
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case Actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const tasksApp = combineReducers({
    tasks,
    visibilityFilter
});

export default tasksApp;
