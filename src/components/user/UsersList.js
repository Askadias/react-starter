import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import PropTypes from 'prop-types';
import './UserManager.css'

const UsersList = ({users, onDeleteUser}) => (
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>First Name</TableHeaderColumn>
                <TableHeaderColumn>Last Name</TableHeaderColumn>
                <TableHeaderColumn>Age</TableHeaderColumn>
                <TableHeaderColumn/>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}> {
            users.map(user => (
                    <TableRow key={user.id}>
                        <TableRowColumn>{user.firstName}</TableRowColumn>
                        <TableRowColumn>{user.lastName}</TableRowColumn>
                        <TableRowColumn>{user.age}</TableRowColumn>
                        <TableRowColumn>
                            <IconButton onClick={() => onDeleteUser(user.id)}>
                                <ActionDelete/>
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                )
            )
        }
        </TableBody>
    </Table>
);

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteUser: PropTypes.func.isRequired
};

export default UsersList