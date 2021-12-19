import axios from "axios";


const getReservationByIdService = (reservationId) => {
    console.log(`getReservationByIdService`);
    return axios.get(`/reservation/getreservationbyId/${reservationId}`);
}
const getAllReservationService = () => {
    console.log(`getReservationByIdService`);
    return axios.get(`getallreservation`);
}

const addReservationService = (reservation) => {
  console.log(`addReservation`);
  return axios.post(`addReservation`, reservation);
};

const updateReservationService = (reservation) => {
  console.log(`updateReservationService`);
  return axios.post(`updateReservation`, reservation);
};

const deleteReservationService = (reservationId) => {
  console.log(`deleteReservationService`);
  return axios.post(`deleteReservation${reservationId}`);
};
export {
  getReservationByIdService ,
  getAllReservationService,
  addReservationService,
  updateReservationService,
  deleteReservationService,

};