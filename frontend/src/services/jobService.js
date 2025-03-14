import axios from 'axios';

const API_URL = '/api/jobs'; // Replace with your backend API URL

const fetchJobs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};

const searchJobs = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search?query=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error searching jobs:', error);
        return [];
    }
};

export { fetchJobs, searchJobs };