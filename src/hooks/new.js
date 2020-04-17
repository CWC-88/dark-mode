import { useState, useEffect } from "react";

const useCounter = (initalValue=0, delay=1000) => {
  const [state, setState] = useState(initalValue);
  useEffect(() => {
    setTimeout(() => {
      setState(state + 1);
    }, delay);
  }, [state]);
  return [state, setState] 
};
export default useCounter;


const [savedCounter] = useCounter()
console.log(savedCounter)