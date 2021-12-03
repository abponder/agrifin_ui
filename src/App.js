import './App.css';
import React, { useState, useEffect } from 'react';
const axios = require('axios');


function App() {
  const [data, setData] = useState([]); // js destructuring; useState is react
  //useEffect ... if you want your data before you render the component
  useEffect(()=>{ 
    axios.get('/api')
    .then(function (response) {
    setData(response.data)
    console.log(response);
  })
    .catch(function (error) {
    // handle error
    console.log(error);
  })
    .then(function () {
    // always executed
  });
 },
  [] )
 
  return (
    <div>
      Hello World
      {/* if data length is greater than 0 same as truthy, then return second part of statement */}
      {data.length && data.map(obj=>obj.ID)}
    </div>

  );
}

export default App;
