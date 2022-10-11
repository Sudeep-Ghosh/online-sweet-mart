
function OrderBillTable(props){
    return(
        
            <tr>
                <th>{props.index}</th>
                <td >{props.orderBillId}</td>
                <td >{props.createdDate}</td>
                <td>{props.totalCost}</td>
            </tr>
      
    )
}

export default OrderBillTable;