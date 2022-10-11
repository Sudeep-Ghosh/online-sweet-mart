
import {useState,useEffect} from "react";
import axios from 'axios';
import { Table} from 'react-bootstrap';
import UserDelTable from "./userDelTable";
import "./table.scss"


function DeleteUser(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async ()=>{
      const response = await axios.get("http://localhost:2097/api/v1/user");
      setUsers(response.data);
      console.log(response);
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:2097/api/v1/user/${id}`);
        loadUsers();
    }

    


    return(
        <div className='table-wrapper'>
            <h1>Delete User</h1>
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
                    {users.map((user, index) => {
                        return (
                            <UserDelTable
                                index={index + 1}
                                userId={user.userId}
                                type={user.type}
                                userName={user.userName}
                                deleteUser={deleteUser}
                            >
                            </UserDelTable>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default DeleteUser;