import { useDispatch } from "react-redux";
import { deleteTask} from '../../redux/tasks/operations';

import css from './Task.module.css';

export const Task = ({ id, text }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));
 
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button className={css.btn} type="button" onClick={handleDelete}>
      </button>
    </div>
  );
};
