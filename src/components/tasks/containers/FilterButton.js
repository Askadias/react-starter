import FlatButton from 'material-ui/FlatButton/FlatButton';
import {setVisibilityFilter} from "../actions";
import connect from "react-redux/es/connect/connect";


const mapStateToProps = (state, ownProps) => {
    return {
        secondary: ownProps.filter === state.visibilityFilter,
        style: {
            fontWeight: ownProps.filter === state.visibilityFilter ? 'bold' : 'normal'
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlatButton);

export default FilterButton;
