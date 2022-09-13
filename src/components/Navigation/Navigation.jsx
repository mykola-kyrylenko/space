import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import {Container, NavBtn, NavL} from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
        <div>
          <NavLink to="/"><Logo/></NavLink>
        </div>

        <NavBtn>
          <NavL to="/">Dragon</NavL>
          <NavL to="dragons-list">Shuttles</NavL>
        </NavBtn>

    </Container>
  )
}

export default Navigation;