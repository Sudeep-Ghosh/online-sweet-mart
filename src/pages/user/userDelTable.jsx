import { Button } from "react-bootstrap";

function UserDelTable(props){
    return(
        
        <tr>
            <th style={{backgroundColor: "black", color: "white"}}>{props.index}</th>
            <td >{props.userId}</td>
            <td>{props.userName}</td> 
            <td>
            <Button variant="outline-danger" href="deleteUser" onClick={()=>{props.deleteUser(props.userId)}}>Delete</Button> 
            </td> 
        </tr>
    
    )
}

export default UserDelTable;


