import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Routes/Main'
import ModiCreate from './Routes/ModiCreate'

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
    <BrowserRouter>
    <Switch>
    <Route path="/" exact >
      <Main data={data}/>
    </Route>
    <Route path="/modiCreate" exact >
      <ModiCreate/>
    </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
