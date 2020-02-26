import React, { useState, useEffect } from 'react';
import Main from './Routes/Main'

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
  }

  useEffect(() => {
    callAPI();
  }, [])

  console.log("App: ")
  console.log(apiResponse)

  return (
      <Main apiResponse={apiResponse}/>
  );
}

export default App;
