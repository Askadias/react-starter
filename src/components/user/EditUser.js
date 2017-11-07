import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Paper from "material-ui/Paper/Paper";
import RaisedButton from "material-ui/RaisedButton/RaisedButton";
import TextField from "material-ui/TextField/TextField";
import NumberInput from "material-ui-number-input/NumberInput";

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {user: props.user}
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
    };

    render() {
        return <Paper className='User-add-panel' zDepth={2}>
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
    }
}

EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    onUpdateUser: PropTypes.func.isRequired
};
