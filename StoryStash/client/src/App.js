import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from "./logo.svg"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((response) => setData(response.postData));
  }, [])

  return (
    <div className="App">
      <h2>User Notes</h2>
      {data.map((item, index) => (
        <div key={index} className="note-card">
          <h3>{item.media}</h3>
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Note:</strong> {item.note}</p>
          </div>
      ))}
    </div>
  )
}

export default App