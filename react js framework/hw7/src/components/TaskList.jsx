import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/slices/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка задач...</div>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.completed ? "(Выполнено)" : "(Не выполнено)"}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
