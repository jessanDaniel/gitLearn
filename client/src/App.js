import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";


function App() {
  const [data, setData] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:3000").then(res => setData(res.data.message))
  }, [])

  return (
    <div>{data}</div>
  );
}

export default App;
