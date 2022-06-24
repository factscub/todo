import axios from "axios";
import { useContext, useEffect, useState } from "react";
import '../../Assets/Styles/CreateTask/CreateTask.css'
import RootContext from "../../RootContext";

function CreateTask({ data = {}, setShowTask }) {
    const [text, setText] = useState( '')
    const [date, setDate] = useState( '')
    const [type, setType] = useState( null)
    const [add, setAdd] = useState(false)
    const [dateerror, setDateerror] = useState(null)
    const [typeerror, setTypeerror] = useState(null)
    const [texterror, setTexterror] = useState(null)


    const { user: owner } = useContext(RootContext)

    const [day, month, year] = date.split('/')
    const enteredDate = [month, day, year].join('-')

    useEffect(() => {
        setAdd(false)
        setTypeerror(false)
        setTexterror(false)
    }, [text, date, type])

    const submitDetails = (e) => {
        e.preventDefault()
        setDateerror(new Date().setHours(0, 0, 0, 0) <= new Date(enteredDate).getTime())
        setTypeerror(type === null ? true : false)
        setTexterror(text === null ? true : false)


        if (type !== null && text !== '' && dateerror) {
            setAdd(true)
            let auth=null
            const user = JSON.parse(localStorage.getItem('userData'));
            if (user && user.token) {
                auth= { authorization: 'Bearer ' + user.token };
            } else {
                auth= {};
            }
            
            const data = { text, date, type, owner, auth }
            axios.post(`http://localhost:3001/add`, data).then(d => {
                if (d.status === 201) {
                    console.log(d.data)
                }
                
            }).catch(e=>console.log('Unauthorized username change.'))


        }
    }

    return (
        <div className="modelbox">
            <form className="innerbox" onSubmit={(e) => submitDetails(e)}>
                <div className="head">Add</div>
                <div className="textcontainer">
                    <label>what are you upto?</label>
                    <input type='text' placeholder="Brief text for what you want to accomplish." value={text} onChange={(e) => setText(e.target.value)} />
                    {texterror && <div className="error">Please fill in the input.</div>}
                    <label>When do you want to complete it?</label>
                    <input type='text' placeholder="Date in DD/MM/YYYY" value={date} onChange={(e) => setDate(e.target.value)} />
                    {dateerror === false && <div className="error">Invalid Date.</div>}
                    <label>Types</label>
                    <div className="tags" onClick={(e) => setType(e.target.textContent)}>
                        <div className="tag">Personal</div>
                        <div className="tag">Home</div>
                        <div className="tag">Office</div>
                        <div className="selected">{type}</div>
                        {typeerror && <div className="error">Invalid Type.</div>}
                    </div>

                    <div className="buttons">
                        <div className="button" onClick={() => { setShowTask(false) }}>Cancel</div>
                        <button type="submit">{add ? "Details Added..." : 'Add'}</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default CreateTask;