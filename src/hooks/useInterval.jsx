import React, { useEffect, useRef, useCallback, useState } from "react";

const useInterval = (callback, delay, enabled = false) => {
  const isEnabled = useRef(enabled);
  const callbackRef = useRef(callback);
  const intervalRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    console.log(`delay: ${delay}`)
    intervalRef.current = setInterval(() => callbackRef.current(), delay );
  }, [delay]);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [intervalRef]);

  const start = () => {
    isEnabled.current = true;
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
  }, [delay, set, clear]);

  return {
    clear,
    start,
    stop,
    reset: () => {
      clear();
      set();
    },
  };
};
export default useInterval;
