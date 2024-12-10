import React, { useEffect, useState } from 'react'
import $ from "jquery"
const Ajax = () => {
const [p,setp]=useState([])
    useEffect(()=>
    {
        $.ajax({
            url:"./d1.json",
            method:"GET",
            dataType:"json",
            success:function(data)
            {
                setp(data)
            }
        })
    },[])
  return (

    <>
    <table style={{border:"2px solid black"}}>
        
           <th>ID</th>
           <th>NAME</th>
           <th>EMAIL</th>
            {p.map((item)=>
            {
                return(
                    <tbody>
                    <tr><td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    </tr>
                    </tbody>
                )
            })}
            
    </table>
        
    </>
  )
}

export default Ajax