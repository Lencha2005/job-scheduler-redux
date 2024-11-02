import { Button } from '../Button/Button';
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from '../../redux/filtersSlice';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);
  
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
