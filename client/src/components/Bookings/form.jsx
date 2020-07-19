import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ dataSet, section }) => {
  let [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    size: 1,
    num_child: 0,
    is_smoking: false,
    is_birthday: false,
    birthday_name: "",
  });

  let max;
  if (section.includes("MH")) {
    max = 12;
  } else if (section.includes("B")) {
    max = 4;
  } else if (section.includes("RS")) {
    max = 8;
  } else {
    max = 6;
  }

  const changeData = (e) => {
    let newData = Object.assign({}, userData);
    newData[e.target.name] = e.target.value;
    setUserData(newData);
  };

  const formSubmit = () => {
    let attr = Object.keys(userData);
    let val = Object.values(userData);
    dataSet(attr, val);
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
    } else {
      return false;
    }
  };

  const validateData = (data) => {
    if (
      data.first_name === "" ||
      data.last_name === "" ||
      !validateEmail(data.email) ||
      !validatePhone(data.phone) ||
      data.phone === "" ||
      data.email === ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="container is-fluid">
      <p className="is-size-5 has-text-weight-semibold has-text-danger">
        Fill in the required information (<em>indicated by a *</em>) and then a booking
        button will magically appear on the bottom!
      </p>
      <div className="field">
        <label className="label"> First Name*:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={userData.first_name}
            name="first_name"
            placeholder="First Name"
            onChange={changeData}
          />
        </div>
      </div>

      <div className="field">
        <label className="label"> Last Name*:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={userData.last_name}
            name="last_name"
            placeholder="Last Name"
            onChange={changeData}
          />
        </div>
      </div>

      <div className="field">
        <label className="label"> Email*:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={userData.email}
            name="email"
            placeholder="Enter a Valid Email"
            onChange={changeData}
          />
        </div>
      </div>

      <div className="field">
        <label className="label"> Phone*:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={userData.phone}
            name="phone"
            placeholder="Enter a Valid Phone Number"
            onChange={changeData}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Party Size*:</label>
        <div className="control">
          <div className="select">
            <select onChange={changeData} name="size">
              {new Array(max).fill(0).map((e, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {section.includes("B") || section.includes("RB") ? null : (
        <div className="field">
          <label className="label">Number of Children:</label>
          <div className="control">
            <div className="select">
              <select onChange={changeData} name="num_child">
                {new Array(parseInt(userData.size)).fill(0).map((e, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {!section.includes("RB") ? null : (
        <div className="field">
          <label className="label">Does anyone plan on smoking?</label>
          <div className="control" onChange={changeData}>
            <label className="radio">
              <input type="radio" value="true" name="is_smoking" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" value="false" name="is_smoking" />
              No
            </label>
          </div>
        </div>
      )}

      <div className="field">
        <label className="label">Do you have any birthdays?</label>
        <div className="control" onChange={changeData}>
          <label className="radio">
            <input type="radio" value="true" name="is_birthday" />
            Yes
          </label>
          <label className="radio">
            <input type="radio" value="false" name="is_birthday" />
            No
          </label>
        </div>
      </div>

      <div className="field">
        <label className="label"> Birthday person's name:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="birthday_name"
            onChange={changeData}
            placeholder="Birthday Persons Name(optional)"
            disabled={userData.is_birthday === "true" ? false : true}
          />
        </div>
      </div>
      <div className="level" style={{marginBottom:"10vh"}}>
        <div className="level-item">
          {validateData(userData) ? (
            <button className="button is-success">
              <Link to="/confirmation" onClick={formSubmit}>
                Book My Table!
              </Link>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
