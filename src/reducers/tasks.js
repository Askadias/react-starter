import {ADD_TASK, SET_TASKS, TOGGLE_TASK} from "../actions/actionTypes";

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TASK:
            return state.map(task =>
                (task.id === action.id)
                ? {...task, completed: !task.completed}
                : task
            );
        case SET_TASKS:
            return action.tasks;
        default:
            return state
    }
};

export default tasks;
