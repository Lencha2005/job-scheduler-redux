import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UseMenu/UseMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav/>}
    </header>
  );
};
