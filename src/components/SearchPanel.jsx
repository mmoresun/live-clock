import React, { useState, useEffect } from 'react';

const SearchPanel = ({ handleZoneChange, value, handleRefreshChange }) => {

    // creating a local state, where fetched data will be saved

    const [zoneList, setZoneList] = useState(['']);

    // fetching data from World Time API

    useEffect(() => {

        fetch('https://worldtimeapi.org/api/timezone')
            .then(response => response.json())
            .then(json => setZoneList(json))
            .catch(err => console.log(err))

    }, []);
    return (
        // stylizing our component a little
        <div className='searchpanel'>

            <p>Region:</p>
            <select
                value={value}
                onChange={handleZoneChange} // when user is choosing any item of the list, function handleZoneChange is working and transferring {value} to the parent App component
            >
                {zoneList.map((item) => { // .map() array method is going thru zoneList array, creating list of <option> tags with unique key and putting every element of array inside

                    return (
                        <option
                            key={item}
                        >
                            {item}

                        </option>)
                })}
            </select>
            <div>
                <p>Refresh rate:&nbsp;
                    <select
                        onChange={handleRefreshChange}>

                        <option value={'5000'}>5 sec</option>
                        <option value={'10000'}>10 sec</option>
                        <option value={'15000'}>15 sec</option>

                    </select></p>
                {/* <p>Start/stop refreshing:
                    <input 
                    type='checkbox'
                    onChange={handleStartStop}                    
                    />
                </p> */}
            </div>
        </div>
    );
}

export default SearchPanel;
