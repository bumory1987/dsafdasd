import './App.css';
import axios from "axios"
import {useState} from "react"




function App() {
  const callApi = async () => {
    axios.get("/seedb").then((res)=>{
      console.log(res.data)
      setData(res.data)
    })

  }
  const [data, setData] = useState(null)
  const onClick = () => {
    callApi()
  }
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>button</button>
      </div>
      {data && <div>${JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
