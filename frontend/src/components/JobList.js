import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../services/jobService';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const loadJobs = async () => {
            const data = await fetchJobs();
            setJobs(data);
        };
        loadJobs();
    }, []);

    return (
        <div className="job-list">
            <h1>Job Listings</h1>
            {jobs.length > 0 ? (
                <ul>
                    {jobs.map(job => (
                        <li key={job.id} className="job-item">
                            <h2>{job.title}</h2>
                            <p><strong>Company:</strong> {job.company}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Experience:</strong> {job.experience}</p>
                            <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="apply-button">Apply</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs found.</p>
            )}
        </div>
    );
};

export default JobList;