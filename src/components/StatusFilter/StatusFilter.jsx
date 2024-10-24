import { Button } from '../Button/Button';
// 1. Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену

import css from './StatusFilter.module.css';
import { setStatusFilter } from '../../redux/filtersSlice';

export const StatusFilter = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // 2. Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);

  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));


  return (
    <div className={css.wrapper}>
      {/* <Button>All {filter === "all" && "is active"}</Button>
      <Button>Active {filter === "active" && "is active"}</Button>
      <Button>Completed {filter === "completed" && "is active"}</Button> */}
      <Button onClick={() => handleFilterChange("all")} selected={filter === 'all'}>All</Button>
      <Button onClick={() => handleFilterChange("active")} selected={filter === 'active'}>Active</Button>
      <Button onClick={() => handleFilterChange("completed")} selected={filter === 'completed'}>Completed</Button>
    </div>
  );
};
