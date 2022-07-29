import React,{useState} from 'react'

const Tasklist = (infodata) => {

    const [ data , setData] = useState({infodata})
  return (
     <div className='container-fluid'>
        <div className='tasklist_txt'>
            <p>Task List</p>
            <div className='table_conatiner'>
                <table className='table'>
                   <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Type</th>
                        <th>Assigned to</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                    {data.map((item)=> {
                            return (
                                <td>{item}</td>
                            )
                           })}
                    </tr>
                   </thead>
                </table>
            </div>
        </div>
     </div>
  )
}

export default Tasklist