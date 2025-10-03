/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react';
import { CACHE } from '@/hooks/useImg';
import styles from './cache_reader.module.css';

const CacheReader = ({}) => {
  const [count, setCount]= useState<number>(0);
  useEffect(()=>{
    setCount(CACHE.size);
  }, [CACHE.size]);

  return (
    <section className={styles.container}>
      <p className={styles.count}>count: {count}</p>
      <div className={styles.inner}>
        { count > 0 && Array(count).fill(0).map((_, i) => (
            <div 
              key={i}
              className={styles.dot}
            ></div>
          ) )}
      </div>
    </section>
  )
}

export default CacheReader