import React, { useState } from 'react';
import data from '../../data/metal.json';
import './MetalMeta.css';

export default function MetalMeta() {
  const [ totalFans, setTotalFans ] = useState();



  const calculateTotalFans = () => {
    let fans = 0;
    
    console.log(fans);
    return (fans * 10000).toLocaleString('en');
  };


  return (
    <>
      <p>Total Metal Bands: {data.length}</p>
      {/* <p>Total Fans: {fans}</p> */}
    </>
  )
};

