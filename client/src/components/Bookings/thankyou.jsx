import React from "react";

const Thankyou = ({username}) => {
  return (
    <div className="level">
      <div className="level-item">

      <p className="is-size-3">Your table has been booked! Thank you for booking with us {username}!</p>
      </div>
    </div>
  );
};

export default Thankyou;