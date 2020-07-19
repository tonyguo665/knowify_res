import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

const DeleteRow = ({ reservation, reservationList, setReservationList }) => {
  let [modal, setModal] = useState(false);

  const modalChange = () => {
    setModal(!modal);
  };

  const deleteReservation = () => {
    axios
      .delete("/api/reservation", {
        params: {
          id: reservation.id,
        },
      })
      .then(() => {
        setReservationList(reservationList.filter((ele) => ele.id !== reservation.id));
        modalChange();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card mb-6">
      <div className="card-content">
        <p>
          Reservation for: {reservation.first_name} {reservation.last_name}
        </p>
        <p>At {moment(reservation.res_date_time).format("dddd, MMMM Do YYYY, h:mm a")}</p>
        <p>Email: {reservation.email}</p>
        <p>Phone: {reservation.phone}</p>
        <p>Party Size: {reservation.size}</p>
        <p>Table Number: {reservation.table_num}</p>
        <button className="button is-danger" onClick={modalChange}>X</button>

        <div class={`modal ${modal ? "is-active" : "is-not-active"}`}>
          <div class="modal-background" onClick={modalChange}></div>
          <div class="modal-content">
            <div class="card">
              <div class="card-content">
                <p>Are you sure you want to delete the following revervation:</p>

                <p>
                  Reservation for: {reservation.first_name} {reservation.last_name}
                </p>
                <p>
                  At{" "}
                  {moment(reservation.res_date_time).format("dddd, MMMM Do YYYY, h:mm a")}
                </p>
                <p>Email: {reservation.email}</p>
                <p>Phone: {reservation.phone}</p>
                <p>Party Size: {reservation.size}</p>
                <p>Table Number: {reservation.table_num}</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <button className="button is-danger" onClick={deleteReservation}>Delete this reservation!</button>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          <button class="modal-close is-large" onClick={modalChange}></button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRow;
