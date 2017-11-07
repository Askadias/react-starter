import React from 'react';
import { shallow } from 'enzyme';
import UsersList from "./UsersList";
import {UserInfoRow} from "./UsersList";

const users = [
    {id: 1, firstName: 'Kast', lastName: 'Askadias', age: 31},
    {id: 2, firstName: 'Gray', lastName: 'Lumin', age: 26}
];

it('should display deletable users', () => {
    let userToDelete = 0;

    const wrapper = shallow(<UsersList users={users} onDeleteUser={(id) => userToDelete = id} />);
    wrapper.setProps({ users: users });
    let headers = wrapper.find('TableHeaderColumn');
    expect(headers.length).toEqual(4);
    expect(headers.at(0).childAt(0).text()).toEqual('First Name');
    expect(headers.at(1).childAt(0).text()).toEqual('Last Name');
    expect(headers.at(2).childAt(0).text()).toEqual('Age');

    let userRows = wrapper.find('TableRow');
    expect(userRows.length).toEqual(users.length + 1);
    assertUserRow(0, userRows.at(1));
    assertUserRow(1, userRows.at(2));

    let deleteUserButton = userRows.at(1).find('IconButton');
    deleteUserButton.simulate('click');
    expect(userToDelete).toEqual(1);

    deleteUserButton = userRows.at(2).find('IconButton');
    deleteUserButton.simulate('click');
    expect(userToDelete).toEqual(2);
});

let assertUserRow = (index, userRow)=> {
    expect(userRow.childAt(0).childAt(0).text()).toEqual(users[index].firstName);
    expect(userRow.childAt(1).childAt(0).text()).toEqual(users[index].lastName);
    expect(userRow.childAt(2).childAt(0).text()).toEqual(users[index].age.toString());
};
