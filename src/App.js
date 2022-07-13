import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [quotes, setQuotes] = useState("");
  const getQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>{
      let randonNum= Math.floor(Math.random()*data.length);
      setQuotes(data[randonNum]);
    })
  };

  useEffect(() => {
    getQuote();
  }, []);
  

    return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      <div className="text">{quotes.text}</div>
      <div className="author">{quotes.author}</div>
    </div>
  );
}

export default App;
