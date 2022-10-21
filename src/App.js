import './App.css';
import React, { useState, useEffect } from 'react';
import DateCard from './components/DateCard';
import SearchPanel from './components/SearchPanel';
import Header from './components/Header';

function App() {

  // initializing local state to get value from SearchPanel, save it and thansfer to DateCard
  const [value, setValue] = useState('Europe/Warsaw');

  // initializing local state to catch time from fetch

  const [time, setTime] = useState('')

  // handleZoneChange is handling user's choosing the time zone from the list and saving it to the _value_ variable

  const handleZoneChange = (event) => {
    setValue(() => event.target.value);

  };

  // function for getting time from the server
  const getTime = (value) => {
    fetch(`https://worldtimeapi.org/api/timezone/${value}`) // fetching data from server
      .then((response) => response.json())
      .then((data) => setTime(data)) // saving data to time variable with setTime
      .catch((err) => console.log(err));
  }

  ;

  useEffect(() => {

    let myInterval;

    if (value) { // preventing from sending an empty request

      getTime(value); // requesting

      myInterval = setInterval(() => { // refreshing with setInterval every 5 seconds

        getTime(value);

      }, 5000);
    }
    return () => clearInterval(myInterval);
  }, [value]); // condition to rerender


  return (

    <div className='App'>

      <Header />
      <SearchPanel
        handleZoneChange={handleZoneChange} // _handleZoneChange_ is going to SearchPanel like a prop
        value={value} // ... as wel as _value_
      />
      <DateCard
        time={time} // _time_ is going to the DateCard as a prop
        value={value} // _value_ variable is going to DateCard as a prop
      />
      <h6><a href='https://github.com/mmoresun/live-clock/tree/main'>Source code</a></h6>

    </div>
  );
}

export default App;
