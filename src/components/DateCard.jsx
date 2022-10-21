import React from 'react';


const DateCard = ({ value, time }) => {

    return (

        <div className='datecard'>

            {/* value comes from App component - we will use it not only in SearchPanel, but also in DateCard component */}
            {time.datetime ? <p>Current time at {value} is:</p> : <h3>Chooose a city</h3>}

            {/* here comes _datatime_ item from _time_ object */}
            
            <h3>{time.datetime && time.datetime.toString().slice(0, 10) + ` ` + time.datetime.toString().slice(11, 19)}</h3>
            
            {/* cutting time information ahead */}

        </div>
    );
}

export default DateCard;
