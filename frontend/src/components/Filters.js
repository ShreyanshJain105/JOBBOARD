import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [location, setLocation] = useState('');
    const [experience, setExperience] = useState('');

    const handleFilter = () => {
        onFilter({ location, experience });
    };

    return (
        <div className="filters">
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
            />
            <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience"
            />
            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

export default Filters;