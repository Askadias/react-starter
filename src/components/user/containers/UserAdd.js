import connect from "react-redux/es/connect/connect";
import {addUser} from "../actions";
import UserAddForm from "../UserAdd";

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (user) => {
            dispatch(addUser(user))
        }
    }
};

const UserAdd = connect(null, mapDispatchToProps)(UserAddForm);

export default UserAdd;