import { viewUserService } from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { viewUser,viewAllUser,deleteUserByID } from "../../redux/UserSlice";
import User from "../models/User";

const UserById = () => {

    
    const [userId, setuserId] = useState('');
    
    const dispatch = useDispatch();
    const userDataFromStore = useSelector((state) => state.user.userState);
    const userList = useSelector((state) => state.user.userList);



    const handleUser = (e) => {
        console.log('handleuser');
        setuserId(e.target.value);
    }

    const submitViewUser = (evt) => {
        evt.preventDefault();
        console.log('submitViewUser');
        viewUserService(userId)
            .then((response) => { dispatch(viewUser(response.data)) })
            .catch(() => {
                alert(`Employee with ${userId} not found.`);
            });
        console.log(Object.keys(userList));
        setuserId('');
    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find user by id</p>
                <form className="form form-group form-primary" onSubmit={submitViewUser}>
                    <input className="form-control mt-3" type="number" id="userId" name="userId" value={userId} onChange={handleUser} placeholder="Enter user id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search user" />
                </form>
                <p>User details: {userDataFromStore.userId} {userDataFromStore.firstName} {userDataFromStore.lastName} </p>
            </div>

    );
}

export default UserById;