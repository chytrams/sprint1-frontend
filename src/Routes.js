import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import AddUser from "./components/Usercontroller/AddUser";
import DeleteUser from "./components/Usercontroller/DeleteUser";
import UpdateUser from "./components/Usercontroller/UpdateUser";
import UserById from "./components/Usercontroller/UserById";
import ViewAllUsers from "./components/Usercontroller/ViewAllUsers";

import Header from "./components/Header";

import Home from './components/Home';
import Login from "./components/Login";
import Logout from './components/Logout';
import Page404 from './components/Page404';
import Register from "./components/Register";

import AddReservation from "./components/Usercontroller/AddReservation";

const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                
                                <Route path="/user/addUser"> <AddUser /> </Route>
                                <Route path="/user/deleteUser"> <DeleteUser /> </Route> 
                                <Route path="/user/updateUser"> <UpdateUser /> </Route>
                                {/* <Route path="/user"> <UserById /> </Route>
                                <Route path="/user"> <ViewAllUsers /> </Route> */}

                                <Route path="/user/viewUser"> <UserById /> </Route>
                                <Route path="/user/viewAllUser"> <ViewAllUsers /> </Route>
                                
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}


export default Routes;



// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import SpringBootData from "./components/SpringBootData";
// import React, { useEffect, useState } from 'react';
// // import EmpData from "./components/EmpData";
// import Header from "./components/Header";

// import Home from './components/Home';
// import Login from "./components/Login";
// import Logout from './components/Logout';
// import Page404 from './components/Page404';
// import Register from "./components/Register";
// import UserData from './components/Usercontroller/UserData';

// const Routes = () => {

//     let [loginStatus, setLoginStatus] = useState(false);

//     useEffect(() => {
//         setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
//     }, []);

//     if (loginStatus) {    // login statu && id -1
//         return (
//             <div>
//                 <Router>
//                     <div>
//                         <Header />
//                         <div className="container">
//                             <Switch>
//                                 {/* <Route exact path="/" loginStatus > <Home /> </Route> */}
//                                 {/* <Route path="/home" loginStatus> <Home /> </Route> */}
//                                 {/* <Route path="/hello"> <Hello /> </Route> */}
//                                 {/* <Route path="/spring"> <SpringBootData /> </Route> */}
//                                 <Route path="/user"> <UserData /> </Route>
//                                 {/* <Route path="/logout"> <Logout /> </Route> */}
//                                 {/* <Route path="/*"> <Page404 /> </Route> */}
//                             </Switch>
//                         </div>
//                         {/* <Footer /> */}
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div>
//                 <Router>
//                     <div>
//                         <Header />
//                         <div className="container">
//                             <Switch>
//                                 {/* <Route exact path="/" loginStatus > <Home /> </Route> */}
//                                 {/* <Route path="/home" loginStatus> <Home /> </Route> */}
//                                 {/* <Route path="/register"> <Register /> </Route> */}
//                                 {/* <Route path="/login"> <Login /> </Route> */}
//                                 {/* <Route path="/*"> <Page404 /> </Route> */}
//                             </Switch>
//                         </div>
//                         {/* <Footer /> */}
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
// }



// export default Routes;