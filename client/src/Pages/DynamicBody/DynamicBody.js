import '../../Assets/Styles/Dynamicbody/DynamicBody.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import IndividualData from '../../Component/IndividualData/IndividualData'
import FilterTasks from '../../Helper/FilterTasks'
import axios from 'axios'
import RootContext from '../../RootContext'


function DynamicBody() {

    const { user } = useContext(RootContext)
    const { id } = useParams()
    let [dataSet, setData] = useState([]);
    const filterTasks = user ? FilterTasks(dataSet, id) : []
    useEffect(() => {
        axios.get(`http://localhost:3001/${user}`).then(({ data }) => {
            setData(data)
        })
    }, [])

    return (
        <div className="dynamicbody" >
            {
                id !== undefined ? <div className='dynamicbodyhead'>{filterTasks[0]?.time}</div> : !user ? <div className='dynamicbodyhead'>Please login or register</div>
                    : <div className='dynamicbodyhead'>All tasks</div>
            }

            {
                filterTasks && filterTasks.map((sdata) => <IndividualData key={sdata.newData._id} data={sdata} id={id} />)
            }

        </div>
    );
}

export default DynamicBody;
