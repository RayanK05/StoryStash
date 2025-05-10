import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then( //gets app.get("/api")
      response => response.json() //whatever is in the GET response is equal to response
    ).then(
      data=> { //data in the json is passed as the data variable
        setBackendData(data)
      }
    )
  }, []) //[] prevents running more than once

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? 
      (<p>Loading...</p>) : backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    }
    </div>
  )
}

export default App