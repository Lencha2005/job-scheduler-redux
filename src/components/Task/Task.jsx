import { MdClose } from 'react-icons/md';
// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteTask, toggleCompleted } from "../../redux/actions";

import css from './Task.module.css';

export const Task = ({ task }) => {

  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  const handleDelete = () => {
	  dispatch(deleteTask(task.id))
  };

  // 6. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 7. Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => {
	  dispatch(toggleCompleted(task.id))
  };


  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
