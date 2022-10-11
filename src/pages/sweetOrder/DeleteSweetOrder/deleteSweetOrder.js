import './deleteSweetOrder.css';
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteSweetOrder() {

    const navigate = useNavigate();

    const [isDeleted, setDeleted] = useState(false);

    const sweetOrderSchema = Yup.object().shape(
        {
            sweetOrderId: Yup.number("Enter valid Sweet Order Id").required("Enter  Sweet Order Id to proceed").min(1, "Enter valid  Sweet Order Id")
        }
    )

    let handleSubmit = (values) => {

        console.log(values.sweetOrderId);

        axios.delete("http://localhost:8091/api/v1/sweetorder/" + values.sweetOrderId).then((response) => {
            console.log(response.data)
            window.alert("Deleted Sweet Order")
            setDeleted(true);
            document.getElementById("Form1").reset();


        }).catch((error) => {
            console.log(error);
        }
        )



    }

    if (isDeleted == true) {
        navigate("/sweetorder/showAllSweetOrder")
    }



    return (
        <div className="deleteSweetOrder-wrapper">
            <h2>Delete Sweet Order</h2>
            <Formik
                initialValues={{ sweetOrderId: "" }}
                validationSchema={sweetOrderSchema}
                onSubmit={(e) => handleSubmit(e)}
            >
                {(props) =>
                (
                    <Form id="Form1" className="deleteSweetOrderForm">
                        <div>
                            <label for="sweetOrderId">Enter SweetOrderId : </label>
                            <Field type="number" name="sweetOrderId" id="sweetOrderId" className="field1"></Field><br />
                            <div className="error" ><ErrorMessage name="sweetOrderId" ></ErrorMessage></div>
                            <button type="submit" className="btn btn-outline-dark" >Delete</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
export default DeleteSweetOrder;