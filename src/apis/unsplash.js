import Axios from 'axios';

export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID LeWjQTFVj9-HOkt5nShwea38FJLzuugmgA0iYHm2q4M'
        } 
    }
);