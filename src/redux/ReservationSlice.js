import { createSlice } from "@reduxjs/toolkit";
import Reservation from "../components/models/Reservation";

// step 3 for redux - create slices for each components 
const ReservationSlice = createSlice({

    name: 'reservation',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        reservationState: new Reservation(),
        reservationList: []


    },

    reducers: {

        getReservationById: (state, action) => {
            console.log('reservation slice reducer');
            state.reservationState = action.payload;
        },

        getAllReservation: (state, action) => {
            console.log('reservation reducers getAllreservation');
            state.reservationList = action.payload;
        },
        deleteReservationByID: (state, action) => {
            console.log('reservation reducers deleteReservationById');
            state.reservationList = action.payload;
        },
        
        // more methods will be added 
    }
});

export const { getReservationById, getAllReservation,deleteReservationByID } = ReservationSlice.actions;

export default ReservationSlice.reducer;