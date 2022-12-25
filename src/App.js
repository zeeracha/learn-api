import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const convertData = await res.json(); //แปลงจาก json เป็น object{}
    setData(convertData);

    console.log("res",res);
    console.log("convertData", convertData)
  }

  useEffect (() => {
    fetchData();
  }, []);

  return (
   <div className='App'>
    {data.map(value => (
      <div className='info' key={value.id}>
        <h3>{value.id}.{value.title}</h3>
        <img src={value.thumbnailUrl} alt={value.title} />
      </div>
    ))}
   </div>
  );
}

export default App;
