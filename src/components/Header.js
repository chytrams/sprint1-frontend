import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                               <li className="nav-item">
                                    <Link className="nav-link" to="/user/addUser" >ADD USER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/deleteUser" >DELETE USER</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/updateUser" >UPDATE USER</Link>
                                </li> 

                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/viewUser" >VIEW USER BY ID</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/viewAllUser" >VIEW ALL USER</Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/user" >user</Link>
                                </li> */}
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >LOGOUT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;