import connect from "react-redux/es/connect/connect";
import TasksList from "../../components/tasks/TasksList";
import {toggleTask} from "../../actions";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "../../components/tasks/filterTypes";

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return tasks;
        case SHOW_COMPLETED:
            return tasks.filter(t => t.completed);
        case SHOW_ACTIVE:
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