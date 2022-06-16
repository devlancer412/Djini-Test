import React, { useCallback, useEffect, useState } from "react";
import Counter from "./Counter";
import RandomList from "./RandomList";

let timerId = null;

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  const timerFunc = useCallback(() => {
    setCounter((prev) => prev + 1);
    setTimeout(timerFunc, 3000);
  }, []);

  useEffect(() => {
    if (!timerId) {
      timerId = setTimeout(timerFunc, 3000);
    }
  }, []); //eslint-disable-line

  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Инкрементировать
      </button>
      <Counter counter={counter} />
      <RandomList count={counter} />
    </div>
  );
}

export default ParentComponent;
