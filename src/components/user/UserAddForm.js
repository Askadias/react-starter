import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import NumberInput from 'material-ui-number-input';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './UserManager.css'

const emptyUser = {firstName: '', lastName: '', age: '30'};

export default class UserAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {user: emptyUser}
    }

    handleInputChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        const {user} = this.state;
        this.props.onAddUser({
            firstName: user.firstName,
            lastName: user.lastName,
            age: Number.parseInt(user.age, 10)
        });
        this.setState({user: emptyUser})
    };

    render() {
        return (
            <Paper className='User-add-panel' zDepth={2}>
                <form onSubmit={this.onSubmit}>
                    <TextField name='firstName' value={this.state.user.firstName} floatingLabelText="First Name"
                               onChange={this.handleInputChange}/>
                    <TextField name='lastName' value={this.state.user.lastName} floatingLabelText="Last Name"
                               onChange={this.handleInputChange}/>
                    <NumberInput name='age' value={this.state.user.age} min={1} max={150} floatingLabelText="Age"
                                 onChange={this.handleInputChange}/>
                    <RaisedButton type='submit' label="Add User" primary={true}/>
                </form>
            </Paper>
        )
    }
}

UserAddForm.propTypes = {
    onAddUser: PropTypes.func.isRequired
};
