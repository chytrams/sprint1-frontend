import { getReservationByIdService } from "../services/ReservationService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllReservationService,addReservationService,updateReservationService,deleteReservationService } from "../services/ReservationService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { getReservationById,getAllReservation,deleteReservationByID } from "../../redux/ReservationSlice";
import Reservation from "../models/Reservation";


const AddReservation = () => {


    const [newReservationObj, setNewReservationObj] = useState(new Reservation());
    const [displayReservationObj, setDisplayReservationObj] = useState(new Reservation());
    const handleAddReservation = (e) => {
        console.log(e.target.value);
        setNewReservationObj({
            ...newReservationObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddReservation = (evt) => {
        evt.preventDefault();
        console.log('addReservations');
        axios.post(`http://localhost:8082/reservation/addReservation`, newReservationObj)
            .then((response) => {
                setDisplayReservationObj(response.data);
                alert('Reservation added successfully.');
                setNewReservationObj({ reservationStatus:'',reservationType:'',reservationDate:'',reservationTime:'',source:'',destination:'',})
                       
            })
            .catch(() => {
                alert("Reservation could not be added.");
            });
    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Reservation Registration</p>
        <div id="addNewReservationDiv">
            <input
                type="text"
                id="reservationStatus"
                name="reservationStatus"
                value={newReservationObj.reservationStatus}
                onChange={handleAddReservation}
                placeholder="Enter Reservation Status" />
                <br/>
                <br/>
            <input
                type="text"
                id="reservationType"
                name="reservationType"
                value={newReservationObj.reservationType}
                onChange={handleAddReservation}
                placeholder="Enter reservationType" />
                <br/>
                <br/>
            <input
                type="text"
                id="reservationDate"
                name="reservationDate"
                value={newReservationObj.reservationDate}
                onChange={handleAddReservation}
                placeholder="Enter ReservationDate" />
                <br/>
                <br/>
             <input
                type="text"
                id="reservationTime"
                name="reservationTime"
                value={newReservationObj.reservationTime}
                onChange={handleAddReservation}
                placeholder="Enter ReservationTime" />   
                <br/>
                <br/>
             <input
                type="text"
                id="source"
                name="source"
                value={newReservationObj.source}
                onChange={handleAddReservation}
                placeholder="Enter source" />  
                <br/>
                <br/>
            <input
                type="text"
                id="destination"
                name="destination"
                value={newReservationObj.destination}
                onChange={handleAddReservation}
                placeholder="Enter destination" />   
                <br/>
                <br/>
            <input
                type="submit"
                value="Add Reservation"
                onClick={submitAddReservation}
            />
        </div>
        <p>New Reservation Data:{displayReservationObj.reservationId} {displayReservationObj.reservationStatus} {displayReservationObj.reservationType} {displayReservationObj.reservationDate}{displayReservationObj.reservationTime}{displayReservationObj.source}{displayReservationObj.destination} </p>
    </div>

    );



}

export default AddReservation;