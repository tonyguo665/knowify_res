import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Confirmation = ({ userdata }) => {
  const confirmClick = () => {
    axios.post("/api/reservation", userdata).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="message is-primary center-text">
      <div className="message-body">
        <p>
          Booking for: {userdata.first_name} {userdata.last_name}
        </p>
        <p>At {moment(userdata.res_date_time).format("dddd, MMMM Do YYYY, h:mm a")}</p>
        <p>Party size of : {userdata.size}</p>
        <p>Callback number: {userdata.phone}</p>
        <p>Email to reach you by: {userdata.email}</p>
        <p>Reserving for table {userdata.table_num}</p>
        {userdata.num_child > 0 ? (
          <p>Accompanied by {userdata.num_child} children</p>
        ) : null}
        {userdata.is_birthday ? (
          <p>With a birthday for {userdata.birthday_name}</p>
        ) : null}
      </div>

      <div className="level">
        <div className="level-item">
          <button className="button is-success">
            <Link to="/thankyou" onClick={confirmClick}>
              Confirm My Reservation!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
