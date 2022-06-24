import axios from 'axios'
import React from 'react'
import '../../Assets/Styles/SingleTask/SingleTask.css'
export default function SingleTask({ data }) {

  const deleteTask = () => {
    axios.delete(`http://localhost:3001/${data.newData._id}`).then(d => console.log(d.data))
    
  }

  const cancel = (e) => {
    const element = e.target.offsetParent
    element.setAttribute('style', 'display:none')
  }

  return (
    <div className='modelbox'>
      <div className='innerbox'>
        <p className='innertext'>{data.newData.text}</p>
        <p className='innertext'>Date: {data.newData.date}</p>
        <p className='innertext'>Type: {data.newData.type}</p>
        <div className='delete' onClick={(e) => {
          deleteTask()
          cancel(e)
        }}>Delete</div>
        <div className='cancel' onClick={(e) => cancel(e)}>Cancel</div>

      </div>
    </div>
  )
}
