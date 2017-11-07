import React from 'react'
import PropTypes from 'prop-types'
import Task from "./Task";
import List from "material-ui/List/List";

const TasksList = ({tasks, onTaskClick}) => (
    <List className='TaskManager'>
        {tasks.map((task) => (
            <Task key={task.id} {...task} onClick={() => onTaskClick(task.id)}/>
        ))}
    </List>
);

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTaskClick: PropTypes.func.isRequired
};

export default TasksList;
