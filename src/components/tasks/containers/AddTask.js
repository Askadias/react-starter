import React from 'react'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import TextField from 'material-ui/TextField/TextField';
import connect from "react-redux/es/connect/connect";
import {addTask} from "../actions";

let AddTask = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.input.value.trim()) {
                    return
                }
                dispatch(addTask(input.input.value));
                input.input.value = ''
            }}>
                <TextField name='taskName' ref={node => input = node}/>
                <RaisedButton type='submit' label='Add Task' primary={true}/>
            </form>
        </div>
    )
};

AddTask = connect()(AddTask);

export default AddTask;
