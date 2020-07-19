import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import SingleTable from "./singleTable";
import { Link } from "react-router-dom";

const Tables = ({ dataSet, date }) => {
  let [tables, setTables] = useState([]);
  let [section, setSection] = useState("Main");
  let [selected, setSelected] = useState("");
  let [reserveList, setReserveList] = useState([]);

  useEffect(() => {
    let endTime = moment(date).add(30, "m").format();
    axios
      .get("/api/reservation", {
        params: {
          timeStart: date,
          timeEnd: endTime,
        },
      })
      .then(({ data }) => {
        setReserveList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/tables", {
        params: {
          section: section,
        },
      })
      .then(({ data }) => {
        setTables(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [section]);

  const sectionChange = (e) => {
    setSection(e.target.name);
  };

  const tableSelect = (tableName) => {
    setSelected(tableName);
  };

  const tableSubmit = () => {
    dataSet(["table_num"], [selected]);
  };
  return (
    <div className="container">
      <div className="level">
        <div className="level-item">
          <p>
            Pick from our available seating areas below and the layout of that section
            will shown. Red tables have been already booked so go ahead and pick a green
            one!
          </p>
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          <button  className="button" name="Main" onClick={sectionChange}>
            Main Hall (Max 12 people)
          </button>
        </div>
        <div className="level-item">
          <button className="button" name="Bar" onClick={sectionChange}>
            Bar (Max 4 people | No Children)
          </button>
        </div>
        <div className="level-item">
          <button className="button" name="Riverside" onClick={sectionChange}>
            Riverside (Max 8 people)
          </button>
        </div>
        <div className="level-item">
          <button className="button" name="Riverbed" onClick={sectionChange}>
            Riverbed (Max 6 people | Smoking Allowed | No Children)
          </button>
        </div>
      </div>

      <div className="container">
        <div className="rest-layout" style={{ height: "50vh", position: "relative" }}>
          {tables.map((table, i) => (
            <SingleTable
              table={table}
              tableSelect={tableSelect}
              selected={selected}
              reserveList={reserveList}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          {selected !== "" ? <p>You have selected table number: {selected}</p> : null}
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          {selected !== "" ? (
            <button className="button">
              <Link to="/form" onClick={tableSubmit}>
                Book this table!
              </Link>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Tables;
