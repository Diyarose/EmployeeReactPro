import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewEmployee = () => {
    const [data,setData]=useState(
        [
            {
                "empname":"Don",
                "empid":"123",
                "mobile":"6734348822",
                "email":"dhiya@gmail.com",
                
            }
        ]
    )

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {data.map(
                                        (value,index)=>{
                                            return   <tr>
                                            <th scope="row">{value.empname}</th>
                                            <td>{value.empid}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                        </tr>
                                        }
                                      )}
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee