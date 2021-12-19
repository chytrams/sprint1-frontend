import { viewUserService } from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { viewUser,viewAllUser,deleteUserByID } from "../../redux/UserSlice";
import User from "../models/User";


const UpdateUser = () => {

    const [newUserObj, setNewUserObj] = useState(new User());
    const [updtUserObj, setUpdtUserObj] = useState(new User());
    const [displayUserObj, setDisplayUserObj] = useState(new User());
    const [updateUserObj, setUpdateUserObj] = useState(new User());
    const [userId, setUserId] = useState('');
    const [deleteUser, setDeleteUser] = useState('');
    const dispatch = useDispatch();
    const userDataFromStore = useSelector((state) => state.user.userState);
    const userList = useSelector((state) => state.user.userList);
    const userDelete = useSelector((state) => state.user.userDelete);


    const handleUpdateUser = (e) => {
        console.log(e.target.value);
        setUpdtUserObj({
            ...updtUserObj,
            [e.target.name]: e.target.value,
        });
    }


    const submitUpdateUser = (evt) => {
        evt.preventDefault();
        console.log('updateUser');
        axios.put(`http://localhost:8082/user/updateUser`, updtUserObj)
            .then((response) => {
                setUpdateUserObj(response.data);
                alert('User details updated successfully.');
                
                setNewUserObj({ userName:'', password:'',firstName:'',lastName:'',contact:'',email:''})
            
            })
            .catch(() => {
                alert("User could not be found.");
            });
    }

    return (


        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Update New User</p>
        {/* <form onSubmit={submitAddEmp}> */}
        <div id="addNewUserDiv">
        <input
                type="text"
                id="userId"
                name="userId"
                value={updtUserObj.userId}
                onChange={handleUpdateUser}
                placeholder="Enter user Id" />
                <br/>
                <br/>
            
                <input
                type="text"
                id="userName"
                name="userName"
                value={newUserObj.userName}
                onChange={handleUpdateUser}
                placeholder="Enter User Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="password"
                name="password"
                value={newUserObj.password}
                onChange={handleUpdateUser}
                placeholder="Enter password" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={newUserObj.firstName}
                onChange={handleUpdateUser}
                placeholder="Enter First Name" />
                <br/>
                <br/>
             <input
                type="text"
                id="lastName"
                name="lastName"
                value={newUserObj.lastName}
                onChange={handleUpdateUser}
                placeholder="Enter LastName" />   
                <br/>
                <br/>
             <input
                type="text"
                id="contact"
                name="contact"
                value={newUserObj.contact}
                onChange={handleUpdateUser}
                placeholder="Enter contact" />  
                <br/>
                <br/>
            <input
                type="text"
                id="email"
                name="email"
                value={newUserObj.email}
                onChange={handleUpdateUser}
                placeholder="Enter email" />   
                <br/>
                <br/>
            <input
                type="submit"
                // type="button"
                value="Update User"
                onClick={submitUpdateUser}
            />
        </div>
        <p>Updated User Data: {displayUserObj.userId} {displayUserObj.userName} {displayUserObj.password} {displayUserObj.firstName}{displayUserObj.lastName}{displayUserObj.contact}{displayUserObj.email}</p>
    </div>
    


    );


}

export default UpdateUser;