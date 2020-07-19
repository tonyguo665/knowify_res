import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Tables from "./components/Bookings/tables";
import Form from "./components/Bookings/form";
import Confirmation from "./components/Bookings/confirmation";
import Thankyou from "./components/Bookings/thankyou";
import Delete from "./components/Deletes/delete";

const App = () => {
  let defaultData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    size: 1,
    table_num: "",
    num_child: 0,
    is_smoking: false,
    is_birthday: false,
    birthday_name: "",
    res_date_time: "",
  };

  let [userdata, setUserdata] = useState(defaultData);

  const dataSet = (attr, val) => {
    let newdata = Object.assign({}, userdata);
    for (let i = 0; i < attr.length; i++) {
      newdata[attr[i]] = val[i];
    }
    setUserdata(newdata);
  };

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/"
          render={(props) => <Landing {...props} dataSet={dataSet} />}
          exact
        />
        <Route
          path="/tables"
          render={(props) => (
            <Tables {...props} dataSet={dataSet} date={userdata.res_date_time} />
          )}
          exact
        />
        <Route path="/form" render={(props) => (
            <Form {...props} dataSet={dataSet} section={userdata.table_num}/>
          )} exact />
        <Route path="/confirmation" render={(props) => (
            <Confirmation {...props} userdata={userdata}/>
          )} exact />
        <Route path="/thankyou" render={(props) => (
            <Thankyou {...props} username={userdata.first_name}/>
          )} exact />
        <Route path="/delete" component={Delete} exact />
      </Switch>
    </div>
  );
};

export default App;
