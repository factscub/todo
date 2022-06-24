import SideNav from "../../Layouts/SideNav/SideNav";
import DynamicBody from "../DynamicBody/DynamicBody";
import '../../Assets/Styles/Body/Body.css'

function Body() {
    return ( 
        <div className="body">
            <SideNav />   
            <DynamicBody />
        </div>
     );
}

export default Body;