import { useCallback, useEffect, useRef } from 'react';

type TimeoutCallback = () => void;

interface UseTimeoutOptions {
  delay: number;
  callback: TimeoutCallback;
  enabled?: boolean;
}

export const useTimeout = ({ delay, callback, enabled = true }: UseTimeoutOptions): any => {
  const callbackRef = useRef<TimeoutCallback>(callback);
  const callbackId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const fire = useCallback(()=>{
        callbackId.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
  },[delay, callback])

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fire()

    return () => {
      clearTimeout(callbackId.current);
    };
  }, [delay, enabled, fire]);

  return { fire, callback }
};

export default useTimeout;
