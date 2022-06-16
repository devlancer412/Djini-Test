import React from "react";

const Counter = (props) => {
  const { counter } = props;
  return <span style={{ display: "block" }}>{counter}</span>;
};

export default Counter;
