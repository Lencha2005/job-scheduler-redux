import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasks/operations";
import DocumentTitle from "../../components/DocumentTitle";
import { TaskList } from "../../components/TaskList/TaskList";
import { TaskEditor } from '../../components/TaskEditor/TaskEditor';

export default function TasksPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  
    useEffect(() => {
      dispatch(fetchTasks());
    }, [dispatch]);
  
    return (
      <>
        <DocumentTitle>Your tasks</DocumentTitle>
        <TaskEditor/>
        <div>{isLoading && 'Request in progress...'}</div>
        <TaskList />
      </>
    );
  }
  