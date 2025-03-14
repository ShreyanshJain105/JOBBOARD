import React, { useState } from 'react';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import { fetchJobs, searchJobs } from '../services/jobService';

const Home = () => {
    const [jobs, setJobs] = useState([]);

    const handleSearch = async (query) => {
        const data = await searchJobs(query);
        setJobs(data);
    };

    const handleFilter = async (filters) => {
        // Implement filtering logic here (e.g., call backend API with filters)
        console.log('Filters:', filters);
    };

    return (
        <div className="home">
            <h1>Job Board</h1>
            <SearchBar onSearch={handleSearch} />
            <Filters onFilter={handleFilter} />
            <JobList jobs={jobs} />
        </div>
    );
};

export default Home;