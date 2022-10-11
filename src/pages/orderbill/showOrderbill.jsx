import Table from 'react-bootstrap/Table';
import OrderBillTable from './orderbillTable';
import { useEffect,useState } from "react";
import "./table.scss";
import axios from 'axios';

function ShowOrderbill() {

    
    const [orderbill, setOrderBill] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:2097/api/v1/orderbill").then((response) => {
          console.log(response.data);
          setOrderBill(response.data);
        }).catch(e=>console.log(e));
    },[])

    

    

    return (
        <div>
            <h1>Order Stats</h1>
            <br></br>
            <Table bordered striped hover variant="dark" >
                <thead>
                    <tr>
                    <th >#</th>
                        <th >OrderBill Id</th>
                        <th >Created Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {orderbill.map((cust,index) => {
                        return (
                            <OrderBillTable
                                index={index+1}
                                orderBillId={cust.orderBillId}
                                createdDate={cust.createdDate}  
                                totalCost={cust.totalCost}                              
                            ></OrderBillTable>
                        )
                    })}
                </tbody>
            </Table>
        </div>


    )
}

export default ShowOrderbill;