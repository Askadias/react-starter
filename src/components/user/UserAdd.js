import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './UserManager.css'

const emptyUser = {firstName: '', lastName: '', age: '30'};

class UserAdd extends Component {

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
        if (!user.firstName.trim() || !user.age.trim()) {
            return
        }
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
                <form onSubmit={this.onSubmit} className='UserAdd-form'>
                    <TextField name='firstName' value={this.state.user.firstName} floatingLabelText="First Name"
                               onChange={this.handleInputChange}/>
                    <TextField name='lastName' value={this.state.user.lastName} floatingLabelText="Last Name"
                               onChange={this.handleInputChange}/>
                    <TextField name='age' value={this.state.user.age} floatingLabelText="Age"
                               onChange={this.handleInputChange}/>
                    <RaisedButton type='submit' label="Add User" primary={true}/>
                </form>
            </Paper>
        )
    }
}

UserAdd.propTypes = {
    onAddUser: PropTypes.func.isRequired
};

export default UserAdd;
