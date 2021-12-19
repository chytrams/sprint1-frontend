import { createSlice } from "@reduxjs/toolkit";
import User from "../components/models/User";

// step 3 for redux - create slices for each components 
const UserSlice = createSlice({

    name: 'user',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        userState: new User(),
        userList: []


    },

    reducers: {

        viewUser: (state, action) => {
            console.log('userSlice reducer viewUser');
            state.userState = action.payload;
        },

        viewAllUser: (state, action) => {
            console.log('user reducers viewAlluser');
            state.userList = action.payload;
        },
        deleteUser: (state, action) => {
            console.log('user reducers deleteUser');
            state.userList = action.payload;
        },
        
        // more methods will be added 
    }
});

export const { viewUser, viewAllUser,deleteUser } = UserSlice.actions;

export default UserSlice.reducer;