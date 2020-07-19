import React, { useState } from "react";
import axios from "axios";
import DeleteRow from "./deleteRow";

const Delete = () => {
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [reservationList, setReservationList] = useState([]);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const validatePhone = (phone) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneno)) {
      return true;
    }
    return false;
  };

  const searchReservation = () => {
    if (validateEmail(email)) {
      axios
        .get("/api/search", { params: { email: email } })
        .then(({ data }) => {
          setReservationList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("/api/search", { params: { phone: phone } })
        .then(({ data }) => {
          setReservationList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container is-fluid mb-6">
      <div className="level">
        <div className="level-item">
          <p>Search reservations by email or phone.</p>
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          <div className="field">
            <label className="label"> Email:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={email}
                placeholder="Search By Email"
                onChange={emailChange}
                name="email"
              />
            </div>
          </div>

          <div
            className="field"
            style={{ marginBottom: "0.75rem", marginLeft: "0.75rem" }}
          >
            <label className="label"> Phone:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={phone}
                placeholder="Search By Phone"
                onChange={phoneChange}
                name="phone"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          {validateEmail(email) || validatePhone(phone) ? (
            <button className="button" onClick={searchReservation}>
              Search Reservations!
            </button>
          ) : null}
        </div>
      </div>
      <div>
        {reservationList.map((reservation) => (
          <DeleteRow
            reservation={reservation}
            reservationList={reservationList}
            setReservationList={setReservationList}
          />
        ))}
      </div>
    </div>
  );
};

export default Delete;
