import axios from 'axios';

// Create services for other components in this way. 


const loginUserService = (user) => {
    console.log(`loginUser`);
    return axios.post(`/user/loginUser`, user);
}

const viewUserService = (userId) => {
    console.log(`viewUserService`);
    return axios.get(`/user/viewUser/${userId}`);
}
const viewAllUserService = () => {
    console.log(`viewAllUserService`);
    return axios.get(`/user/viewAllUsers`);
}

const addUserService = (user) => {
    console.log(`addUser`);
    return axios.post(`/user/addUser`, user);
}

const updateUserService = (user) => {
    console.log(`updateUser`);
    return axios.put(`/user/updateUser`, user);
}

const deleteUserService = (userId) => {
    console.log(`deleteUser`);
    return axios.delete(`/user/deleteUser/${userId}`);
}




export { loginUserService, viewUserService, viewAllUserService, addUserService, updateUserService, deleteUserService};