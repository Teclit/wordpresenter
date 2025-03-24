import axios from 'axios';

const API_URL = 'http://localhost:8080/api/words';

// Fetch all users
const fetchWords = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Example usage
fetchWords().then(r => console.log('Words fetched!'));
