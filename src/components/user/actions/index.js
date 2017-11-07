const Actions = {
    ADD_USER: 'ADD_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    SET_USERS: 'SET_USERS'
};

let nextUserId = 0;
export const addUser = (user) => {
    return {
        type: Actions.ADD_USER,
        user: {
            ...user,
            id: nextUserId++
        }
    }
};

export const updateUser = user => {
    return {
        type: Actions.UPDATE_USER,
        user
    }
};

export const deleteUser = id => {
    return {
        type: Actions.DELETE_USER,
        id
    }
};

export const setUsers = (users) => {
    let maxId = Math.max.apply(Math, users.map((user) => user.id));
    nextUserId = maxId + 1;
    return {
        type: Actions.SET_USERS,
        users
    }
};

export default Actions