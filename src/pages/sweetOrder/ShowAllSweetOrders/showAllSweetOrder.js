import { useState, useEffect } from "react";
import axios from "axios";
import './showAllSweetOrder.css';
import SweetOrderDetails from "./sweetOrderDetails";

function ShowAllSweetOrder() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2097/api/v1/sweetorder").then((response) => {
            setItems(response.data);
            console.log(response.data);
        })
            .catch((e) => console.log(e));
    }, ["http://localhost:2097/api/v1/sweetorder"]);

    return (
        <div className="sweetorder-list-wrapper" >
            <h1>Sweet Order Details</h1>
            <div >
                <table className="sweetorder-table" border="2px" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>sweetOrderId</th>
                            <th>userId</th>
                            <th>createdDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item,index) => {
                            return (
                                <SweetOrderDetails
                                 index={index+1}
                                    sweetOrderId={item.sweetOrderId}
                                    userId={item.customer.userId}
                                    createdDate={item.createdDate}
                                ></SweetOrderDetails>
                            );
                        })}
                    </tbody>
                </table>
                <p>
                    {items.sweetOrderId}
                </p>
            </div>
        </div>
    )

}
export default ShowAllSweetOrder;