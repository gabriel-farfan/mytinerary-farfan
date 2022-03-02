import React from "react";

function Alert(props) {
  const StateAlert = props.StateAlert;
  return(
      <>
      {StateAlert ? ( <> <h2 style={{ color: "red" }}>UPS! Your current search does not return any results </h2> </>) : (<> </>) }
    </>
  )
}

export default Alert