import React, { useCallback } from "react";

const RandomList = (props) => {
  const { count } = props;
  const generateNumbers = useCallback(() => {
    return Array(count)
      .fill(0)
      .map((i) => Math.ceil(Math.random() * 100));
  }, [count]);

  return (
    <ul>
      {generateNumbers().map((item, ind) => (
        <li key={`rand_${ind}`}>{item}</li>
      ))}
    </ul>
  );
};

export default RandomList;
