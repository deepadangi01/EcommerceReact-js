import { useParams } from "react-router-dom";
const EditData=()=>{
    const {myid} =useParams();
    return(
        <>
        <h1> Edit Employee Redcords : {myid}</h1>
        </>
    )
}
export default EditData;