import React, { useEffect, useState } from 'react';
import data from '../../data/metal.json';
import './MetalMeta.css';

export default function MetalMeta() {
  const [ totalFans, setTotalFans ] = useState();
  
  const calculateTotalFans = () => {
    let fans = 0;
    for (const band of data) {
      fans += band.fans
    }
    return (fans * 10000).toLocaleString('en');
  };

  useEffect(() => {
    setTotalFans(calculateTotalFans());
  }, [])

  return (
    <div className='metalMetaContainer'>
      <p>Total Metal Bands: {data.length}</p>
      <p>Total Fans: {totalFans}</p>
    </div>
  )
};

