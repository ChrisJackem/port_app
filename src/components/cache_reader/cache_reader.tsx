/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { CACHE } from '@/hooks/useImg';

const CacheReader = () => {
  const [count, setCount]= useState<number>(0);
  useEffect(()=>{
    setCount(CACHE.size);
  }, [CACHE.size]);

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default CacheReader