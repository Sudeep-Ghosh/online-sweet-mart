
import "./showAllSweetOrder.css";
  function SweetOrderDetails(props) {
      return (
        <tr>
          <td>{props.index}</td>
          <td>{props.sweetOrderId}</td>
          <td>{props.userId}</td>
          <td>{props.createdDate}</td>
        </tr>
      );
    }
    
    export default SweetOrderDetails;