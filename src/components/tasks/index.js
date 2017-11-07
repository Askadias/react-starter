import React from 'react'
import AddTask from "./containers/AddTask";
import VisibleTasksList from "./containers/VisibleTasksList";
import Filter from "./Filter";
import Paper from "material-ui/Paper/Paper";
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import {setTasks} from "./actions";
import tasksApp from "./reducers";

import './TaskManager.css'

let tasksStore = window.devToolsExtension
    ? createStore(tasksApp, window.devToolsExtension({name: 'Tasks', instanceId: 'tasks'}))
    : createStore(tasksApp);

tasksStore.dispatch(setTasks([
    {id: 0, text: 'Finish react tutorial', completed: true},
    {id: 1, text: 'Write unit tests', completed: true},
    {id: 2, text: 'Finish redux tutorial', completed: false},
    {id: 3, text: 'Make code splitting', completed: false}
]));

const TaskManager = () => (
    <Provider store={tasksStore}>
        <Paper zDepth={1} className='TaskManager'>
            <AddTask/>
            <VisibleTasksList/>
            <Filter/>
        </Paper>
    </Provider>
);

export default TaskManager;
