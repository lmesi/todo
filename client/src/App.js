import React, { useState, useEffect } from 'react';
import Main from './Routes/Main'

function App() {
  const [data, setData] = useState("");
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => setData(res.data))
  }

  useEffect(() => {
    callAPI();
  }, [])

  console.log("App: ")
  console.log(data)

  return (
      <Main data={data}/>
  );
}

export default App;
