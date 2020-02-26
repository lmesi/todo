import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Routes/Main'

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => setApiResponse(res.title));
  }

  useEffect(() => {
    callAPI();
  }, [])

  return (
    <div className="App">
      <Main apiResponse={apiResponse}/>
    </div>
  );
}

export default App;
