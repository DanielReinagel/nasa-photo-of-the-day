import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Picture from './components/Picture';

function App() {
  const [imgSrc, SetImgSrc] = useState("");
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=fSXeZrZdkhRWcNOlLhGsx01jlU8b5VQmZSB4w7F0`)
      .then(resp => SetImgSrc(resp.data.url))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Picture src={imgSrc}/>
    </div>
  );
}

export default App;
