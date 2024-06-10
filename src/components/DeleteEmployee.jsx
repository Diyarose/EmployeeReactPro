import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteEmployee = () => {
    const [data,setData]=useState(
        {
            "empname":"",
            
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Employee Name</label>
                    <input type="text" className="form-control" name='empname' value={data.empname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteEmployee