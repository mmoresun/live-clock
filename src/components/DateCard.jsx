import React from 'react';

const DateCard = ({ value, time }) => {

    return (

        <div className='datecard'>

            {/* value comes from App component - we will use it not only in SearchPanel, but also in DateCard component */}
            {time.datetime && <p>Current time in {value} is:</p>}
            {/* here comes _datatime_ item from _time_ object */}
            <h3>{new Date(time.datetime).toLocaleString('en', { dateStyle: 'long', timeStyle: 'medium', timeZone: value })}</h3>
        </div>
    );
}

export default DateCard;
