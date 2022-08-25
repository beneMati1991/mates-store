import { useState } from "react";

const useCounter = (stock, initial) => {
  const [count, setCount] = useState(initial);

  function add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function substract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return {
    add,
    substract,
    count,
  };
};

export default useCounter;
