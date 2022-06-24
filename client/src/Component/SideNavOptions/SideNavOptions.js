
import { NavLink } from 'react-router-dom'
import '../../Assets/Styles/SideNavOptions/SideNavOptions.css'
function SideNavOptions({ time }) {

  return (
    <div>

      <NavLink to={'/' + time} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{time} </NavLink>

    </div>
  );
}

export default SideNavOptions;