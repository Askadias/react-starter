import connect from "react-redux/es/connect/connect";
import {deleteUser} from "../actions";
import UsersList from "../UsersList";

const mapStateToProps = (state) => {
    return {users: state.users}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteUser: (id) => {
            dispatch(deleteUser(id))
        }
    }
};

const UsersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList);

export default UsersListContainer;
