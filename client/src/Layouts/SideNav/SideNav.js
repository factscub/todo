import '../../Assets/Styles/SideNav/SideNav.css';
import SideNavOptions from '../../Component/SideNavOptions/SideNavOptions';

import { TASK_TIME, TASK_TYPE } from '../../Config/Config';

function SideNav() {
    return (
        <div className="sidenav">

            {
                TASK_TIME.map((time, key) => <SideNavOptions key={key} time ={time}/>)
            }
            <hr/>
            {
                TASK_TYPE.map((time, key) => <SideNavOptions key={key} time ={time}/>)
            }
        </div>
    );
}

export default SideNav;