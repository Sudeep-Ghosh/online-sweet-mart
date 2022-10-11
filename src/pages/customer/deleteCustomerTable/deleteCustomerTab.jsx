import { Button } from "react-bootstrap";



function DeleteCustomerTable(props){

  

    return(
        
            <tr>
                <th style={{backgroundColor: "black", color: "white"}}>{props.index}</th>
                <td >{props.userId}</td>
                <td>{props.userName}</td>
                <td>
                <Button variant="outline-danger" href="deleteCustomer" onClick={()=>{props.deleteCustomer(props.userId)}}>Delete Customer</Button> 
                </td> 
            </tr>
      
    )
}

export default DeleteCustomerTable;