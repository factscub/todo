import { useEffect, useState } from 'react';
import '../../Assets/Styles/IndividualData/IndividualData.css'
import axios from 'axios'
import SingleTask from '../../Pages/SingleTask/SingleTask';
function IndividualData({ data, id }) {

    const [check, setCheck] = useState(data.newData.checked)
    const [showTask, setShowTask] = useState(false)

    const updateCheck = (check) => {
        axios.put(`http://localhost:3001/update/${data.newData._id}`, {
            checked: check
        })
    }
    useEffect(() => {
        updateCheck(check)
    }, [check])

    return (
        <div className="individualdata" >
            {
                showTask && <SingleTask data={data} />
            }
            <div className="Check-Text" >
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={check}
                    onChange={() => setCheck(!check)
                    }
                />
                <div className="text" onClick={() => setShowTask(true)} >{data.newData.text}</div>

            </div >

            <div className="date">
                {
                    id === undefined && data.time
                }
            </div>

        </div>
    );
}

export default IndividualData;