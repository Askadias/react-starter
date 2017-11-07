import {addUser} from "../../actions/index";
import UserAddForm from "../../components/user/UserAddForm";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (user) => {
            dispatch(addUser(user))
        }
    }
};

const UserAdd = connect(null ,mapDispatchToProps)(UserAddForm);

export default UserAdd;
