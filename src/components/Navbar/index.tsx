import { Link } from 'react-router-dom';
import * as NavbarStyles from './styles';

export const Navbar = () => {
  return (
    <NavbarStyles.Container>
      <Link to="/">
        <h1>SOON</h1>
      </Link>
      <img src="https://reboque.me/images/logo%20_reboque_soon.png" alt="" />
    </NavbarStyles.Container>
  );
};
