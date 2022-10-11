import axios from "axios";

const ALL_USERS = "http://localhost:2097/api/v1/user";

    export const showAllUsers = async () => {
        let temp = await axios.get(ALL_USERS).then(resp => resp.data);
        return temp;
    }

    export const addUser = async(userObj) => {
        let temp = await axios.post(ALL_USERS, userObj).then(resp => resp.data);
        return temp;
        //console.log(temp.data)
    }

    