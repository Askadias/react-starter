import {deleteUser} from "../../actions/index";
import UsersList from "../../components/user/UsersList";
import connect from "react-redux/es/connect/connect";

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
