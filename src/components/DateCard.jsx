import React from 'react';


const DateCard = ({ value, time }) => {

    // let myTime = time.datetime.getFullYear();
    // console.log(typeof(myTime))

   return (

        <div className='datecard'>

            {/* value comes from App component - we will use it not only in SearchPanel, but also in DateCard component */}
            {time.datetime ? <p>Current time at {value} is:</p> : <h3>Chooose a city</h3>}
            
            {/* here comes _datatime_ item from _time_ object */}
            <p>{time.datetime && time.datetime}</p>

        </div>
    );
}

export default DateCard;
