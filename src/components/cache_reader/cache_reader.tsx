/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { CACHE } from '@/hooks/useImg';
import styles from './cache_reader.module.css';

const CacheReader = ({}) => {
  const [count, setCount]= useState<number>(0);
  useEffect(()=>{
    setCount(CACHE.size);
  }, [CACHE.size]);

  return (
    <div className={styles.container}>
      <p className={styles.count}>count: {count}</p>
      <div className={styles.inner}>
        { count && Array(count).fill(0).map((_, i) => (
            <div 
            key={i}
            className={styles.dot}
            ></div>
          ) )}
      </div>
    </div>
  )
}

export default CacheReader