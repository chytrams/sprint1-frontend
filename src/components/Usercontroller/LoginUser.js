import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import User from '../models/User';

const LoginUser = () => {

    // const history = useHistory();

    const [loginUser, setLoginUser] = useState(new User());
    const [credentials, setCredentials] = useState('');

    const handleLoginUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setLoginUser({
            ...loginUser,
            [event.target.name]: event.target.value
        });
    }

    const submitLoginUser = (event) => {
        axios.post(`http://localhost:8082/loginUser`, loginUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                // window.location.assign('/addUser');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitLoginUser}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={loginUser.userName}
                            onChange={handleLoginUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={loginUser.password}
                            onChange={handleLoginUser}
                            required
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitLoginUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default LoginUser;
