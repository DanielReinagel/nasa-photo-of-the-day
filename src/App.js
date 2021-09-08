import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Picture from './components/Picture';
import apiUrl from './constants';

function App() {
  const [imgSrc, SetImgSrc] = useState("");
  useEffect(()=>{
    axios.get(apiUrl)
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
