import React from 'react'
import PropTypes from 'prop-types'
import ListItem from "material-ui/List/ListItem";
import Checkbox from "material-ui/Checkbox/Checkbox";

const Task = ({onClick, completed, text}) => (
    <ListItem primaryText={text} leftCheckbox={<Checkbox checked={completed} onClick={onClick}  />} />
);

Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Task;