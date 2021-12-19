import { getUserByIdService } from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { getUserById,getAllUser,deleteUserByID } from "../../redux/UserSlice";
import User from "../models/User";

const UserData = () => {


    const [newUserObj, setNewUserObj] = useState(new User());
    const [updtUserObj, setUpdtUserObj] = useState(new User());
    const [displayUserObj, setDisplayUserObj] = useState(new User());
    const [updateUserObj, setUpdateUserObj] = useState(new User());
    const [fid, setFid] = useState('');
    const [deleteUser, setDeleteUser] = useState('');
    const dispatch = useDispatch();
    const userDataFromStore = useSelector((state) => state.user.userState);
    const userList = useSelector((state) => state.user.userList);
    const userDelete = useSelector((state) => state.user.userDelete);

    const handleUser = (e) => {
        console.log('handleuser');
        setFid(e.target.value);
    }

    const handleAddUser = (e) => {
        console.log(e.target.value);
        setNewUserObj({
            ...newUserObj,
            [e.target.name]: e.target.value,
        });
    }
    const handleUpdateUser = (e) => {
        console.log(e.target.value);
        setUpdtUserObj({
            ...updtUserObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleDeleteUser = (ev) => {
        console.log('handleDeleteUser');
        setDeleteUser(ev.target.value);
    }

    const submitGetUserById = (evt) => {
        evt.preventDefault();
        console.log('submitGetUserById');
        getUserByIdService(fid)
            .then((response) => { dispatch(getUserById(response.data)) })
            .catch(() => {
                alert(`Employee with ${fid} not found.`);
            });
        console.log(Object.keys(userList));
        setFid('');
    }

    const submitGetAllUser = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllUsers');
        getAllUserService()
            .then((response) => {
                dispatch(getAllUser(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddUser = (evt) => {
        evt.preventDefault();
        console.log('addUsers');
        axios.post(`http://localhost:8082/user/add`, newUserObj)
            .then((response) => {
                setDisplayUserObj(response.data);
                alert('User added successfully.');
                setNewUserObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("User could not be added.");
            });
    }

    const submitUpdateUser = (evt) => {
        evt.preventDefault();
        console.log('addUsers');
        axios.put(`http://localhost:8082/user/update`, updtUserObj)
            .then((response) => {
                setUpdateUserObj(response.data);
                alert('User details updated successfully.');
                setNewUserObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("User could not be found.");
            });
    }

    const submitDeleteUser = (evt) => {
        evt.preventDefault();
        console.log('deleteUserDetails');
        axios.delete(`http://localhost:8082/user/delete/${deleteUser}`)
            .then((response) => {     
                alert(`User details deleted successfully.`);
                    
            
            })
            .catch(() => {
                alert(`User not found.`);
            });

    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >User Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find user by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetUserById}>
                    <input className="form-control mt-3" type="number" id="fid" name="fid" value={fid} onChange={handleUser} placeholder="Enter user id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search user" />
                </form>
                <p>User details: {userDataFromStore.userId} {userDataFromStore.firstName} {userDataFromStore.lastName} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Users</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllUser} value="Find All Users" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Userid</th>
                                <th>Name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, k) => {
                                return (
                                    <tr k={k}> <td>{user.userId}</td> <td>{user.firstName}</td><td>{user.lastName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
                <p>Add New User</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewUserDiv">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newUserObj.firstName}
                        onChange={handleAddUser}
                        placeholder="Enter First Name" />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newUserObj.lastName}
                        onChange={handleAddUser}
                        placeholder="Enter Last Name" />
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newUserObj.mobileNumber}
                        onChange={handleAddUser}
                        placeholder="Enter Mobile Number" />
                     <input
                        type="text"
                        id="email"
                        name="email"
                        value={newUserObj.email}
                        onChange={handleAddUser}
                        placeholder="Enter Email" />   
                     <input
                        type="text"
                        id="password"
                        name="password"
                        value={newUserObj.password}
                        onChange={handleAddUser}
                        placeholder="Enter password" />   
                    <input
                        type="submit"
                        // type="button"
                        value="Add User"
                        onClick={submitAddUser}
                    />
                </div>
                <p>New User Data: {displayUserObj.userId} {displayUserObj.firstName} {displayUserObj.lastName}{displayUserObj.mobileNumber}{displayUserObj.email}</p>
            </div>
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
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updtUserObj.firstName}
                    onChange={handleUpdateUser}
                    placeholder="Enter First Name" />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updtUserObj.lastName}
                    onChange={handleUpdateUser}
                    placeholder="Enter Last Name" />
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtUserObj.mobileNumber}
                    onChange={handleUpdateUser}
                    placeholder="Enter Mobile Number" />
                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtUserObj.email}
                    onChange={handleUpdateUser}
                    placeholder="Enter Email" />   
                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtUserObj.password}
                    onChange={handleUpdateUser}
                    placeholder="Enter password" />   
                <input
                    type="submit"
                    // type="button"
                    value="update User"
                    onClick={submitUpdateUser}
                />
            </div>
            <p>Updated User Data: {updateUserObj.UserId} {updateUserObj.firstName} {updateUserObj.lastName} {updateUserObj.mobileNumber} {updateUserObj.email}</p>
        </div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete user by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteUser}>
                    <input className="form-control mt-3" type="number" id="deleteUser" name="deleteUser" value={deleteUser} onChange={handleDeleteUser} placeholder="Enter User Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete User" />
                </form>
                {/* <p>Deleted User details:  {userDelete.firstName} {userDelete.lastName} </p> */}
            </div>

        </div>
    );
}
export default UserData;