import { Table, Alert } from 'react-bootstrap';
import CustomerTable from './customerTable/customerTab';
import axios from "axios";
import { useEffect, useState } from "react";
import "./customerTable/customerTable.scss";

function ShowCustomers() {


    const [customers, setCustomers] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:2097/api/v1/customer").then((response) => {
            console.log(response.data);
            setCustomers(response.data);
        }).catch(error => {
            console.log(error.response.data.errorMessage);
            setErrorData(error.response.data.errorMessage);
        }
        );
    }, [])



    return (
        <div className='table-wrapper'>
            <h1>Customer List</h1>
            <br></br>

            {
                errorData !== "" && <Alert variant='danger'>{errorData}</Alert>
            }

            <Table bordered striped hover className='text-center'>
                <thead>
                    <tr className='thead-dark'>
                        <th >#</th>
                        <th >User Id</th>
                        <th>User Name</th>
                        <th >Cart Id</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust, index) => {
                        return (
                            <CustomerTable
                                index={index + 1}
                                userId={cust.userId}
                                userName={cust.userName}
                                cartId={cust.cart.cartId}
                            >
                                {console.log((cust.cart.cartId))};
                            </CustomerTable>
                        )
                    })}
                </tbody>
            </Table>

        </div>


    )
}

export default ShowCustomers;