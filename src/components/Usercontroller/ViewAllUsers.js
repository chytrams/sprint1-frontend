import { useDispatch, useSelector } from "react-redux";

import { viewAllUserService,addUserService,updateUserService,deleteUserService } from "../services/UserService";

import { viewAllUser} from "../../redux/UserSlice";


const ViewAllUser = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.userList);


    const submitViewAllUser = (evt) => {
        evt.preventDefault();
        console.log('submitViewAllUsers');
        viewAllUserService()
            .then((response) => {
                dispatch(viewAllUser(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (


        <div>
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            <p>List of all Users</p>
            <div>
                <form className="form form-group form-primary">
                    <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitViewAllUser} value="Find All Users" />
                </form>
            </div >
            <table className="table table-light table-striped ">
                <thead>
                    <tr>
                        <th>USER-ID</th>
                        <th>FIRST-NAME</th>
                        <th>LAST-NAME</th>
                        <th>CONTACT</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, k) => {
                        return (
                            <tr k={k}> <td>{user.userId}</td> 
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.contact}</td>
                            <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>


    );

}
export default ViewAllUser;