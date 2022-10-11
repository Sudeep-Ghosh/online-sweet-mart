import axios from "axios";
import './addSweetOrder.css';
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function AddSweetOrder() {

    const [isAvailable, setAvailable] = useState(false);

    const [errorData, setErrorData] = useState("");

    let sweetorderObj = "";


    const sweetOrderSchema = Yup.object().shape(
        {
            userId: Yup.number("Enter valid User Id").required("Enter user id to proceed").min(1, "Enter valid User Id")
        }
    )

    let handleSubmit = (values) => {

        console.log(values.userId);
        sweetorderObj = {
            "customer": {
                "userId": values.userId
            }
        }


        axios.post("http://localhost:8091/api/v1/sweetorder/", sweetorderObj).then((response) => {
           
              //  setAvailable(true),
                console.log(response.data)
               window.alert("Added Sweet Order to User with Id : " + values.userId)
               document.getElementById("form1").reset();
            

        })
            .catch(error => {
                setErrorData(error.response.data.errorMessage)
                console.log(error);
            })


    }



    return (
        <div className="addSweetOrder-wrapper">
            <h2>Add Sweet Order</h2>
           
            <Formik
                initialValues={{ userId: "" }}
                onSubmit={(e) => handleSubmit(e)}
                validationSchema={sweetOrderSchema}
            >
                {(props) => (

                    <Form className="addSweetOrderForm" id="form1">
                    
                        <div> <label for="userId">User Id : </label>
                            <Field type="number" name="userId" id="userId" placeholder="Enter User Id" className=
                            "field1"></Field><br />
                            <div className="error" ><ErrorMessage name="userId" ></ErrorMessage></div>
                        </div>

                        <button type="submit" className="btn btn-outline-dark">Add</button>
                    </Form>



                )}

            </Formik>


        </div>
    )

}
export default AddSweetOrder;