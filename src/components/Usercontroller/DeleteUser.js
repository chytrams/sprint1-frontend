import { viewUserService } from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { viewUser,viewAllUser,deleteUser } from "../../redux/UserSlice";
import User from "../models/User";

const DeleteUser = () => {


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

    const handleDeleteUser = (ev) => {
        console.log('handleDeleteUser');
        setDeleteUser(ev.target.value);
    }

    const submitDeleteUser = (evt) => {
        evt.preventDefault();
        console.log('deleteUser');
        axios.delete(`http://localhost:8082/user/deleteUser/${deleteUser}`)
            .then((response) => {     
                alert(`User details deleted successfully.`);
            })
            .catch(() => {
                alert(`User not found.`);
            });

    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Delete user by id</p>
        <form className="form form-group form-primary" onSubmit={submitDeleteUser}>
            <input className="form-control mt-3" type="number" id="deleteUser" name="deleteUser" value={deleteUser} onChange={handleDeleteUser} placeholder="Enter User Id" autoFocus required />
            <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete User" />
        </form>
    </div>




    );


}

export default DeleteUser;