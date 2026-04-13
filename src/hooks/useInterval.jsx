import React, { useEffect, useRef, useCallback } from "react";

const useInterval = (callback, delay) => {
  const isEnabled = useRef(false);
  const callbackRef = useRef(callback);
  const intervalRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {    
      intervalRef.current = setInterval(() => callbackRef.current(), delay );  
  }, [delay]);

  const clear = useCallback(() => {    
      clearInterval(intervalRef.current);
      intervalRef.current = undefined
  }, [intervalRef]);

  const start = () => {
    isEnabled.current = true;
    clear();
    set();
  };

  const stop = () => {
    isEnabled.current = false;
    clear();
  };

  useEffect(() => {
    if (isEnabled.current) {
      set();
    } else {
      clear();
    }
    return clear;
  }, [delay, set, clear, isEnabled]);

  return {
    start,
    stop,
    reset:()=>{
      clear();
      set();
    },
    enabled: isEnabled.current
  };
};

export default useInterval;
