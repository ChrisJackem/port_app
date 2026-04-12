import React, { useEffect, useRef, useCallback } from "react";

const useInterval = (callback, delay, enabled = false) => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    intervalRef.current = setInterval(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (enabled) {
      set();
    }else{
      clear()
    }
    return clear;
  }, [delay, set, clear, enabled]);

  return {
    clear,
    reset: () => {
      clear();
      set();
    },
  };
};
export default useInterval;
