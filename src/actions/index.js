import {
    ADD_TASK, ADD_USER, DELETE_USER, SET_TASKS, SET_USERS, SET_VISIBILITY_FILTER, TOGGLE_TASK,
    UPDATE_USER
} from "./actionTypes";

let nextTaskId = 0;
export const addTask = text => {
    return {
        type: ADD_TASK,
        id: nextTaskId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        id
    }
};

export const setTasks = (tasks) => {
    let maxId = Math.max.apply(Math, tasks.map((task) => task.id));
    nextTaskId = maxId + 1;
    return {
        type: SET_TASKS,
        tasks
    }
};

let nextUserId = 0;
export const addUser = (user) => {
    return {
        type: ADD_USER,
        user: {
            ...user,
            id: nextUserId++
        }
    }
};

export const updateUser = user => {
    return {
        type: UPDATE_USER,
        user
    }
};

export const deleteUser = id => {
    return {
        type: DELETE_USER,
        id
    }
};

export const setUsers = (users) => {
    let maxId = Math.max.apply(Math, users.map((user) => user.id));
    nextUserId = maxId + 1;
    return {
        type: SET_USERS,
        users
    }
};

