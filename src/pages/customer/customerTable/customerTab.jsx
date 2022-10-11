
function CustomerTable(props){
    return(
        
            <tr>
                <th>{props.index}</th>
                <td >{props.userId}</td>
                <td >{props.userName}</td>
                <td>{props.cartId}</td> 
            </tr>
      
    )
}

export default CustomerTable;