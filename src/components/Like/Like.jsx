import { React, useState } from 'react';
import './Like.css';

export default function Like() {
  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className='likeContainer'>
        <button onClick={decrement}>-</button>
        <h3 className='count'>{count}</h3>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
};

