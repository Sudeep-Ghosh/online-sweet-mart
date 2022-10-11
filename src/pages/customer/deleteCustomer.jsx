
import {useState,useEffect} from "react";
import axios from 'axios';
import { Table} from 'react-bootstrap';
import DeleteCustomerTable from "./deleteCustomerTable/deleteCustomerTab";


function DeleteCustomer(){

    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        loadCustomers();
    },[])

    const loadCustomers = async ()=>{
      const response = await axios.get("http://localhost:2097/api/v1/customer");
      setCustomers(response.data);
      console.log(response);
    }

    const deleteCustomer = async (id)=>{
        await axios.delete(`http://localhost:2097/api/v1/customer/${id}`);
        loadCustomers();
    }

    


    return(
        <div className='table-wrapper'>
            <h1>Delete Customer</h1>
            <br></br>

            {/* {
                errorData !== "" && <Alert variant='danger'>{errorData}</Alert>
            } */}

            <Table bordered striped hover shadow className='text-center'>
                <thead>
                    <tr className='thead-dark'>
                        <th >#</th>
                        <th >User Id</th>
                        <th>Name</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust, index) => {
                        return (
                            <DeleteCustomerTable
                                index={index + 1}
                                userId={cust.userId}
                                userName={cust.userName}
                                deleteCustomer={deleteCustomer}
                            >
                            </DeleteCustomerTable>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default DeleteCustomer;