import React ,{useState,useEffect}from "react"
import './App.css';

function App() {
  const [time,settime] = useState("");
  const [count,setCount] = useState(0)
  const [intervalId,setIntervalid] = useState(null)
  
   
  const handleCount = (e) => {
    if(e.keyCode === 13){
      clearInterval(intervalId)
      setCount(parseInt(time))
      console.log(count)
    }
   
    // console.log(count)
  }

  useEffect(() => {
    if(count > 0){
      const id = setInterval(()=>{
          setCount(count-1)
      },1000)
      setIntervalid(id);
      // console.log(intervalId)
    }else{
      clearInterval(intervalId)
    }
      return () => clearInterval(intervalId);
    
  },[count])

  const formatCountdown = () => {

    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="App">
      <h1>CountDown Timer</h1>
      <input id='timeCount' 
      type="number"
      onChange={(e) => 
      {settime(e.target.value)}} 

      onKeyDown={handleCount} 
      placeholder="Enter Seconds"
      />

      <div id='current-time'>{formatCountdown()}</div>
    </div>
  );
}

export default App;
