import { Button } from "react-bootstrap";
import "./Customer.css";

function CustomerHome() {
    return (
        <>

            <div className="customer-block">
                <h1>Customer Home</h1>
                <div className="button-wrapper">
                    <Button variant="outline-dark" href="showCustomers" size="lg" className="button-style" >View Customer List</Button>
                    <Button variant="outline-dark" href="deleteCustomer" size="lg" className="button-style">Delete Customer</Button>
                </div>

            </div>
        </>
    )
}

export default CustomerHome;