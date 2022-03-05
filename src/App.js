import './App.css';
import Heading from './components/Heading/Heading';
import MetalMeta from './components/MetalMeta/MetalMeta';
import Band from './components/Band/Band';
import data from './data/metal.json';
import { useState } from 'react';

function App() {

  const [ query, setQuery ] = useState('');
  const bands = data.filter(({ band_name, style }) => {
    return band_name.toLowerCase().includes(query.toLowerCase()) 
    || style.toLowerCase().includes(query.toLowerCase())
  }).map((band) => {
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

  return (
    <div className="App">
      <header className="App-header">
          <Heading />
          <MetalMeta />
          <input 
            className='searchInput'
            value={query}
            placeholder="search"
            onChange={(evt) => setQuery(evt.target.value)}
          />
          <div className='bandGrid'>
            {bands}
          </div>
      </header>
    </div>
  );
}

export default App;
