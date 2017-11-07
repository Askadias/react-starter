import connect from "react-redux/es/connect/connect";
import TasksList from "../TasksList";
import {toggleTask} from "../actions";
import {FilterTypes} from "../Filter";

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case FilterTypes.SHOW_ALL:
            return tasks;
        case FilterTypes.SHOW_COMPLETED:
            return tasks.filter(t => t.completed);
        case FilterTypes.SHOW_ACTIVE:
            return tasks.filter(t => !t.completed);
        default:
            return [];
    }
};

const mapStateToProps = state => {
    return {
        tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTaskClick: id => {
            dispatch(toggleTask(id))
        }
    }
};

const VisibleTasksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksList);

export default VisibleTasksList;