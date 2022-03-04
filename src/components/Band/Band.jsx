import React from 'react';
import Like from '../Like/Like';
import './Band.css';

export default function Band({ band_name, formed, origin, fans, split, style }) {
  const styles = style.split(',').map((estilo) => {
    return (
      <li key={estilo}>{estilo}</li>
    );
  })
  return (
    <>
      <div className='bandContainer'>
        <h3>{band_name}</h3>
        <p>Formed: {formed}</p>
        <p>{origin}</p>
        <p>Fans: {(fans * 1000).toLocaleString('en')}</p>
        {split === '-' ? <Like key={band_name} /> : <p>Split: {split}</p>}
        <h4>Style:</h4>
        <ul>
          {styles}
        </ul>
      </div>
    </>
  )
};

