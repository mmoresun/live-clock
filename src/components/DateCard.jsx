import React from 'react';

const DateCard = ({ value, time }) => {    



    return (

        <div className='datecard'>
            {/* value comes from App component - we will use it not only in SearchPanel, but also in DateCard component */}
            <p>{time.datetime ? <p>Current time at {value} is:</p> : <h3>Chooose a city</h3>}</p>
            {/* here comes _datatime_ item from _time_ object */}
            <p>{time.datetime}</p>           

        </div>
    );
}

export default DateCard;
