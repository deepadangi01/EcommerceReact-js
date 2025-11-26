
import { useState, useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Update=()=>{
 const [mydata, setMydata]=useState([]);
 const navigate= useNavigate();

 const loadData=()=>{
    let api="http://localhost:3000/employees/";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);

const myRecDel=(id)=>{
    let api=`http://localhost:3000/employees/${id}`
    axios.delete(api).then((res)=>{
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}

const myEdit=(id)=>{
     navigate(`/editrec/${id}`)
}

 const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.empno} </td>
            <td> {key.name} </td>
            <td> {key.email} </td>
            <td> {key.contact} </td>
            <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={editimg} width="30" height="30" /> 
                 </a>
                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={delimg} width="30" height="30" /> 
                 </a>
            </td>

          </tr>
        
        </>
      )
 })

    return(
        <>
          <h1> Update Employee Records</h1>
          <table>
            <tr>
                <th> Emp No</th>
                <th> Name</th>
                <th>Email</th>
                <th> Contact</th>
                <th> </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Update;