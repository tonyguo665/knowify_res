import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Landing = ({ dataSet }) => {
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");

  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };
  const bookingClick = () => {
    let datetime = `${date} ${time}`;
    dataSet(["res_date_time"], [moment(datetime).format()]);
  };

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-full has-text-centered">
            <div className="level">
              <div className="level-item">
                <h1 className="is-size-3">
                  Welcome to kReservations, where booking is done right!
                </h1>
              </div>
            </div>
            <div className="level">
              <div className="level-item">
                <input
                  type="date"
                  value={date}
                  onChange={dateChange}
                  name="date"
                />
                <input
                  type="time"
                  value={time}
                  onChange={timeChange}
                  name="time"
                  min="18:00"
                  max="22:00"
                  step="1800"
                />
              </div>
            </div>
            <div className="level">
              <div className="level-item">
                {date !== "" && time !== "" ? (
                  <Link to="/tables" onClick={bookingClick}>
                    Book a reservation!
                  </Link>
                ) : (
                  <p> First things first, pick a time and date!</p>
                )}
              </div>
            </div>
            <Link to="/delete">Delete a reservation</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
