import React,{useEffect, useState} from 'react'
import "./middles.css"
import axios from 'axios'

function Middle() {
    
    const [data, setdata] = useState([])
    const name  = "Aswin"
    const list = ["Apple", "Aswin","Mll"]
  useEffect(() => {
    const apiUrl = "https://api.publicapis.org/entries";
    axios.get(apiUrl).then((neeraj) =>{
        setdata(neeraj.data.entries)
        console.log(neeraj.data.entries)
    })
  }, [])

  const renderCard = (items)=>{
    return (
      <div className="card">
          <ul>
              {items.map((item, index) => (
                  <li key={index}>{item.API}</li>
              ))}
          </ul>
      </div>
  );

  };

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
};
const dividedData = chunkArray(data.slice(0, 100), 10);

  return (
    <div className="container">
    {dividedData.map((group, index) => (
        <div key={index} className="card-container">
            {renderCard(group)}
        </div>
    ))}
</div>
  )
}

export default Middle