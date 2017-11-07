import React from 'react'
import UsersList from "./containers/UsersList";
import UserAdd from "./containers/UserAdd";
import Provider from "react-redux/es/components/Provider";
import createStore from "redux/es/createStore";
import usersApp from "./reducers";
import {setUsers} from "./actions";
import './UserManager.css'

let usersStore = createStore(usersApp, window.devToolsExtension({name: 'Users', instanceId: 'users'}));

usersStore.dispatch(setUsers([
    {id: 1, firstName: 'Kast', lastName: 'Askadias', age: 31},
    {id: 2, firstName: 'Gray', lastName: 'Lumin', age: 26}
]));

const UserManager = () => (
    <Provider store={usersStore}>
        <div className='UserManager'>
            <UserAdd/>
            <UsersList/>
        </div>
    </Provider>
);

export default UserManager;
