import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
        <NavLink to="/">Dragon 1</NavLink>
        <NavLink to="dragons-list">Shuttle List</NavLink>
    </nav>
  )
}

export default Navigation;