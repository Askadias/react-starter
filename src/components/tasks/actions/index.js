const Actions = {
    SET_TASKS: 'SET_TASKS',
    ADD_TASK: 'ADD_TASK',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TASK: 'TOGGLE_TASK',
};

let nextTaskId = 0;
export const addTask = text => {
    return {
        type: Actions.ADD_TASK,
        id: nextTaskId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: Actions.SET_VISIBILITY_FILTER,
        filter
    }
};

export const toggleTask = id => {
    return {
        type: Actions.TOGGLE_TASK,
        id
    }
};

export const setTasks = (tasks) => {
    let maxId = Math.max.apply(Math, tasks.map((task) => task.id));
    nextTaskId = maxId + 1;
    return {
        type: Actions.SET_TASKS,
        tasks
    }
};

export default Actions;
