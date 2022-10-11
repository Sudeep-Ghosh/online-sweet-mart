import './sweetOrder.css';
import '../../components/sweetOrderButton/button.css';
import { useNavigate } from 'react-router-dom';
function SweetOrder() {

    const navigate = useNavigate();

    return (
        <div className="sweetorder-wrapper" >
            <h2>Sweet Order Details</h2>
            <hr></hr>
            <div className="sweetorder-card">
                <div><button className="btn btn-outline-dark" onClick={() => navigate("/showAllSweetOrder")}> Show All Sweet Orders</button></div>
                <div><button className="btn btn-outline-dark" onClick={() => navigate("/addSweetOrder")}> Add Sweet Order</button></div>
                <div><button className="btn btn-outline-dark" onClick={() => navigate("/deleteSweetOrder")}> Delete Sweet Order</button></div>
            </div>
        </div>
    )

}
export default SweetOrder;