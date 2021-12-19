import { viewUserService } from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { viewUser,viewAllUser,deleteUser } from "../../redux/UserSlice";
import User from "../models/User";


const AddUser = () => {


    const [newUserObj, setNewUserObj] = useState(new User());
    const [displayUserObj, setDisplayUserObj] = useState(new User());
    const handleAddUser = (e) => {
        console.log(e.target.value);
        setNewUserObj({
            ...newUserObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddUser = (evt) => {
        evt.preventDefault();
        console.log('addUser');
        axios.post(`http://localhost:8082/user/addUser`, newUserObj)
            .then((response) => {
                setDisplayUserObj(response.data);
                alert('User added successfully.');
                setNewUserObj({ userName:'', password:'',firstName:'',lastName:'',contact:'',email:''})
            
            })
            .catch(() => {
                alert("User could not be added.");
            });
    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>User Registration</p>
        <div id="addNewUserDiv">
            <input
                type="text"
                id="userName"
                name="userName"
                value={newUserObj.userName}
                onChange={handleAddUser}
                placeholder="Enter User Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="password"
                name="password"
                value={newUserObj.password}
                onChange={handleAddUser}
                placeholder="Enter password" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={newUserObj.firstName}
                onChange={handleAddUser}
                placeholder="Enter First Name" />
                <br/>
                <br/>
             <input
                type="text"
                id="lastName"
                name="lastName"
                value={newUserObj.lastName}
                onChange={handleAddUser}
                placeholder="Enter LastName" />   
                <br/>
                <br/>
             <input
                type="text"
                id="contact"
                name="contact"
                value={newUserObj.contact}
                onChange={handleAddUser}
                placeholder="Enter contact" />  
                <br/>
                <br/>
            <input
                type="text"
                id="email"
                name="email"
                value={newUserObj.email}
                onChange={handleAddUser}
                placeholder="Enter email" />   
                <br/>
                <br/>
            <input
                type="submit"
                value="Add User"
                onClick={submitAddUser}
            />
        </div>
        {/* <p>New User Data: {displayUserObj.userId} {displayUserObj.userName} {displayUserObj.password} {displayUserObj.firstName}{displayUserObj.lastName}{displayUserObj.contact}{displayUserObj.email}</p> */}
        
        <table className="table table-light table-striped ">
                <thead>
                    <tr>
                        <th>Userid</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>mobileNumber</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {userList.map((user, k) => { */}
                        {/* return ( */}
                           <tr> <td>{displayUserObj.userId}</td> 
                            <td>{displayUserObj.userName}</td>
                            <td>{displayUserObj.password}</td>
                            <td>{displayUserObj.firstName}</td>
                            <td>{displayUserObj.lastName}</td>
                            <td>{displayUserObj.contact}</td>
                            <td>{displayUserObj.email}</td>
                            </tr>
                        {/* ) */}
                    {/* })} */}
                </tbody>
            </table>
    
    </div>

    );



}

export default AddUser;