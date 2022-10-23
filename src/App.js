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

  // local state for refresh rate changing
  const [refreshRate, setRefreshRate] = useState('5000');

  // refresh rate changing function
  const handleRefreshChange = (e) => {

    setRefreshRate(e.target.value);
  }

  // function for getting time from the server
  const getTime = (value) => {
    fetch(`https://worldtimeapi.org/api/timezone/${value}`) // fetching data from server
      .then((response) => response.json())
      .then((data) => setTime(data)) // saving data to time variable with setTime
      .catch((err) => console.log(err));
  };

  useEffect(() => {

    let myInterval;

      if (value) { // preventing from sending an empty request

        getTime(value); // requesting

        myInterval = setInterval(() => { // refreshing with setInterval every {refreshRate} seconds

          getTime(value);

        }, refreshRate);
      }

      return () => clearInterval(myInterval);
  }, [value, refreshRate]); // condition to rerender


  return (

    <div className='App'>

      <Header />
      <SearchPanel
        handleZoneChange={handleZoneChange} // _handleZoneChange_ is going to SearchPanel like a prop
        value={value} // ... as wel as _value_
        handleRefreshChange={handleRefreshChange}        
      />
      <DateCard
        time={time} // _time_ is going to the DateCard as a prop
        value={value} // _value_ variable is going to DateCard as a prop
      />
      <h6><a href='https://github.com/mmoresun/live-clock/tree/main'>Source code on github</a></h6>

    </div>
  );
}

export default App;
