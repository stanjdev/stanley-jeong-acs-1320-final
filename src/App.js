import './App.css';
import Heading from './components/Heading/Heading';
import MetalMeta from './components/MetalMeta/MetalMeta';
import Band from './components/Band/Band';
import data from './data/metal.json';
import { useState } from 'react';

function App() {
  const bands = data.map((band) => {
    return <Band 
              key={band.ID} 
              band_name={band.band_name} 
              formed={band.formed} 
              origin={band.origin} 
              fans={band.fans} 
              split={band.split}
              style={band.style} 
            />
  })

  const [ search, setSearch ] = useState('');
  const inputSearch = (evt) => {
    setSearch(evt.target.value)
    bands.filter((band) => band.band_name.includes(evt.target.value))
  };

  return (
    <div className="App">
      <header className="App-header">
          <Heading />
          <MetalMeta />
          <input 
            onChange={(evt) => inputSearch(evt)}
          />
          <p>{search}</p>
          <div className='bandGrid'>
            {bands}
          </div>
      </header>
    </div>
  );
}

export default App;
